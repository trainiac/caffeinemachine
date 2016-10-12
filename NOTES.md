## Dependencies

### Client

**CSS**
* [aphrodite](https://github.com/Khan/aphrodite) - Allows for writing inline styles via js.

**Utilities**
* [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) - Make node like network request form the browser.
* [lodash](https://lodash.com/) - Utility functions for manipulating data structures.

**React/Redux**
* [normalizr](https://github.com/paularmstrong/normalizr) - Normalizes deeply nested JSON API responses according to a schema for Flux and Redux apps.
* [react](https://facebook.github.io/react/) - Client side rendering framework.
* [react-dom](https://www.npmjs.com/package/react-dom) - This package serves as the entry point of the DOM-related rendering paths.
* [react-redux](http://redux.js.org/docs/basics/UsageWithReact.html) - Helpers for using redux with React.
* [react-router](https://github.com/ReactTraining/react-router) - A routing library for React.
* [react-router-redux](https://github.com/reactjs/react-router-redux) - Helpers for syncing React, Redux, and React Router.
* [redux](http://redux.js.org/) - Redux is a predictable state container.
* [redux-thunk](https://github.com/gaearon/redux-thunk#motivation) Redux Thunk middleware allows you to write action creators that return a function instead of an action.

**Polyfills**
* [babel-polyfill](https://babeljs.io/docs/usage/polyfill/) - This will emulate a full ES2015 environment.

**Dev Tools** Doesn't run in production
* [redux-devtools](https://github.com/gaearon/redux-devtools) - A live-editing time travel environment for Redux.
* [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) - A resizable and movable dock for Redux DevTools.
* [redux-devtools-log-monitor](https://github.com/gaearon/redux-devtools-log-monitor) - The default monitor for Redux DevTools with a tree view.
It shows a log of states and actions, and lets you change their history.
* [redux-logger](http://evgenyrodionov.github.io/redux-logger/) - Logger middleware for Redux

### Server

* [body-parser](https://github.com/expressjs/body-parser) Body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
* [cookie-parser](https://github.com/expressjs/cookie-parser) - Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
* [debug](https://www.npmjs.com/package/debug) - Debugging utility for logging debug information.
* [express](https://expressjs.com/) - Web framework
* [express-jsonschema](https://www.npmjs.com/package/express-jsonschema) - Jsonschema validation middleware
* [http-status-codes](https://www.npmjs.com/package/http-status-codes) - Constants enumerating the HTTP status codes.
* [lodash](https://lodash.com/) - Utility functions for manipulating data structures.
* [morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware.
* [node-fetch](https://www.npmjs.com/package/node-fetch) - A light-weight module that brings window.fetch to Node.
* [serve-favicon](https://github.com/expressjs/serve-favicon) - Middleware for serving a favicon.

### DevTools

* [webpack](https://webpack.github.io/) - Module bundler
* [babel-loader](https://github.com/babel/babel-loader) - Webpack plugin for Babel
* [babel-cli](http://babeljs.io/docs/usage/cli/) - Babel command line, useful for webpack
* [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core) - Babel compiler, required by all babel libraries.

**Reloading**
* [react-hot-loader](https://github.com/gaearon/react-hot-loader) - Hot module loader for react components
* [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) - Compiles js files during development
* [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) - Enable hot module reloading

**babel presets**
* [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) - Babel preset for all es2015 plugins
* [babel-preset-es2015-node5](https://www.npmjs.com/package/babel-preset-es2015-node5) - Adds only es2015 features that node is missing
* [babel-preset-react](https://www.npmjs.com/package/babel-preset-react) - Babel preset for all React plugins

**validator**
* [eslint](http://eslint.org/) - Validates js and enforces code integrity
* [babel-eslint](https://github.com/babel/babel-eslint) - Allows you to lint all valid Babel code with the ESLint
* [eslint-plugin-react](https://github.com/babel/babel-eslint) - React specific linting rules for ESLint

### Tests
* [istanbul](http://gotwarlost.github.io/istanbul/) - Code coverage tool
* [mocha](https://mochajs.org/) - Unit testing tool
* [should](https://shouldjs.github.io/) - Assertion library
* [sinon](http://sinonjs.org/) - Standalone test spies, stubs and mocks
* [babel-plugin-rewire](https://github.com/speedskater/babel-plugin-rewire) - Allows for mocking modules in tests

## Good Reading

* How to run a node server using babel in dev, prod, and test contexts - https://github.com/babel/example-node-server
*

## Other Notes
eslint needs to run with --no-ignore in order to avoid messages with files being ignored

## Things to figure out

devtool: 'cheap-module-eval-source-map'
Read up more on the best source map given the context, i.e. dev, prod, etc. https://webpack.github.io/docs/configuration.html