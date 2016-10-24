'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

var _error = require('./routes/error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (app, settings) => {
  const webpackConfig = settings.webpackConfig;
  const staticSrcPath = settings.staticSrcPath;
  const loggerLevel = settings.loggerLevel;

  const faviconFile = _path2.default.join(staticSrcPath, 'favicon.ico');
  console.log(`configuring favicon ${ faviconFile }`);
  app.use((0, _serveFavicon2.default)(faviconFile));

  console.log(`configuring logger ${ loggerLevel }`);
  app.use((0, _morgan2.default)(loggerLevel));

  console.log('configuring bodyParser');
  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({
    extended: false
  }));

  console.log('configuring cookieParser');
  app.use((0, _cookieParser2.default)());

  console.log('configuring static routes');
  console.log(`webpack config: build path ${ webpackConfig.clientBuildPath }`);
  console.log(`webpack config: src path ${ webpackConfig.clientSrcPath }`);
  console.log(`webpack config: public path ${ webpackConfig.output.publicPath }`);
  app.use(webpackConfig.output.publicPath, _express2.default.static(webpackConfig.clientBuildPath));
  // the public path is defined in webpack.config.js


  const htmlFile = _path2.default.join(staticSrcPath, 'index.html');
  console.log(`configuring html wildcard route ${ htmlFile }`);
  app.use((req, res) => {
    res.sendFile(htmlFile);
  });

  console.log('configuring apiRoutes');
  app.use('/api/', _api2.default);

  console.log('configuring error handlers');
  app.use((0, _error2.default)(app));

  return app;
};
//# sourceMappingURL=app.js.map