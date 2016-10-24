import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackConfig from '../webpack.dev.config'
import configureApp from './app'

let app = express()
const port = 5000
const compiler = webpack(webpackConfig)

console.log('configuring dev')

console.log('configuring webpack middleware')
app.use(
  webpackDevMiddleware(
    compiler,
    {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    }
  )
)

console.log('configuring webpack hot reloader')
app.use(webpackHotMiddleware(compiler))
app = configureApp(app, {
  webpackConfig,
  loggerLevel: 'dev',
  staticSrcPath: webpackConfig.staticSrcPath
})
// start app
app.listen(port, error => {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})

export default app
