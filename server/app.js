import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import favicon from 'serve-favicon'
import logger from 'morgan'
import path from 'path'

import apiRoutes from './routes/api'
import getErrorHandlers from './routes/error'


const getAppRoutes = app => {
  const routes = []

  app._router.stack.forEach(middleware => { // eslint-disable-line no-underscore-dangle
    if (middleware.route) { // routes registered directly on the app
      routes.push(middleware.route)
    } else if (middleware.name === 'router') { // router middleware
      middleware.handle.stack.forEach(handler => {
        if (handler.route) {
          routes.push(handler.route)
        }
      })
    }
  })

  return routes
}

export default (app, webpackConfig, logLevel) => {
  const faviconFile = path.join(webpackConfig.buildPath, 'favicon.ico')
  console.log(`configuring favicon ${faviconFile}`)
  app.use(favicon(faviconFile))

  console.log(`configuring logger ${logLevel}`)
  app.use(logger(logLevel))

  console.log('configuring bodyParser')
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  )

  console.log('configuring cookieParser')
  app.use(cookieParser())

  console.log('configuring static routes')
  console.log(`webpack config: build path ${webpackConfig.clientBuildPath}`)
  console.log(`webpack config: src path ${webpackConfig.clientSrcPath}`)
  console.log(`webpack config: public path ${webpackConfig.output.publicPath}`)
  app.use(
    webpackConfig.output.publicPath,
    express.static(webpackConfig.clientBuildPath)
  )
  // the public path is defined in webpack.config.js


  const htmlFile = path.join(webpackConfig.buildPath, 'index.html')
  console.log(`configuring html wildcard route ${htmlFile}`)
  app.use((req, res) => {
    res.sendFile(htmlFile)
  })

  console.log('configuring apiRoutes')
  app.use('/api/', apiRoutes)


  console.log('configuring error handlers')
  app.use(getErrorHandlers(app))

  console.log(getAppRoutes(app))
  return app
}

