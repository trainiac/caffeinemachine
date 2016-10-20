import apiRoutes from './routes/api'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import favicon from 'serve-favicon'
import getErrorHandlers from './routes/error'
import logger from 'morgan'
import path from 'path'
import webpack from 'webpack'
import webpackConfig from '../webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

// use port number supplied by environment otherwise use default
const defaultPort = 5000
const port = Number(process.env.PORT || defaultPort)
const app = express()
const compiler = webpack(webpackConfig)

app.use(
  webpackDevMiddleware(
    compiler,
    {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    }
  )
)

app.use(webpackHotMiddleware(compiler))

app.use(
  favicon(
    path.join(__dirname, '../client/favicon.ico')
  )
)
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(cookieParser())

// routes for static assets
app.use(
  express.static(
    path.join(__dirname, '../client/build/')
  )
)
// the public path is defined in webpack.config.js

// add html route
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

// ajax routes
app.use('/api/', apiRoutes)

// error routes
app.use(getErrorHandlers(app))

// start app
app.listen(port, error => {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})

export default app
