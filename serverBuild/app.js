'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _error = require('./routes/error');

var _error2 = _interopRequireDefault(_error);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpack3 = require('../webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// use port number supplied by environment otherwise use default
const defaultPort = 5000;
const port = Number(process.env.PORT || defaultPort);
const app = (0, _express2.default)();
const compiler = (0, _webpack2.default)(_webpack4.default);

app.use((0, _webpackDevMiddleware2.default)(compiler, {
  noInfo: true,
  publicPath: _webpack4.default.output.publicPath
}));

app.use((0, _webpackHotMiddleware2.default)(compiler));

app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, '../client/favicon.ico')));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: false
}));
app.use((0, _cookieParser2.default)());

// routes for static assets
app.use(_express2.default.static(_path2.default.join(__dirname, '../client/build/')));
// the public path is defined in webpack.config.js

// add html route
app.use((req, res) => {
  res.sendFile(_path2.default.join(__dirname, '../client/index.html'));
});

// ajax routes
app.use('/api/', _api2.default);

// error routes
app.use((0, _error2.default)(app));

// start app
app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});

exports.default = app;
//# sourceMappingURL=app.js.map