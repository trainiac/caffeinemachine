import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import favicon from 'serve-favicon'
import logger from 'morgan'
import path from 'path'

import apiRoutes from './routes/api'
import getErrorHandlers from './routes/error'


export default (app, settings) => {
  const { webpackConfig, staticSrcPath, loggerLevel } = settings
  const faviconFile = path.join(staticSrcPath, 'favicon.ico')
  console.log(`configuring favicon ${faviconFile}`)
  app.use(favicon(faviconFile))

  console.log(`configuring logger ${loggerLevel}`)
  app.use(logger(loggerLevel))

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


  const htmlFile = path.join(staticSrcPath, 'index.html')
  console.log(`configuring html wildcard route ${htmlFile}`)
  app.use((req, res) => {
    res.sendFile(htmlFile)
  })

  console.log('configuring apiRoutes')
  app.use('/api/', apiRoutes)


  console.log('configuring error handlers')
  app.use(getErrorHandlers(app))

  return app
}

