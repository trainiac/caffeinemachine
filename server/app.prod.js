import express from 'express'
import configureApp from './app'
import webpackConfig from '../../webpack.config'

let app = express()
const defaultPort = 5000
const port = Number(process.env.PORT || defaultPort)
const appUrl = process.env.APP_URL || `http://localhost:${port}/`

app = configureApp(app, {
  webpackConfig,
  loggerLevel: 'combined',
  staticSrcPath: webpackConfig.buildPath
})
// start app
app.listen(port, error => {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Open up %s in your browser.', appUrl)
  }
})

export default app
