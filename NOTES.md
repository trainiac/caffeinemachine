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

## Redux App Notes

* React - `react`, `react-dom`, `react-redux`, `react-router`
  * `react` and `react-dom` are used to render the redux store state and handle user input.
  * `react-redux` is used to connect React components to a redux store
    * `<Provider store>` Is a React component that you use to wrap your whole
      application.  By passing the redux store to the `<Provider>` component, the store becomes available
      to all of the `connect` calls that are used to connect individual components to the
      store.
    * `connect` helps React components subscribe to state changes and dispatch actions
       to a redux store
      * takes a `mapStateToProps` function and a `mapDispatchToProps` function and returns
        a function that takes a React component to wrap and apply the aforementioned mappings
        and finally returns the wrapped React component
      * `mapStateToProps` is a suggested function name. You can name this function whatever you want.
        * takes the whole state and optionally an `ownProps` argument in the case that the mapping
          of prop value to state depends on the store state and it's own prop values.
          It returns a mapping of prop names to the store state and, optionally, own prop values.
        * if `mapStateToProps` is not passed to `rconnect` (e.g. `connect()` or
          `connect(null, mapDispatchToProps)`) the component will not re-render when the store state
          changes
      * `mapDispatchToProps` is a suggested function name. You can name this function whatever you want.
        * takes the `store.dispatch` function and optionally an ownProps argument in the case that the
          a value to be dispatched depends on it's own prop values.
          It returns a mapping of prop names to a function that dispatches some action. There are
          a two ways that you can dispatch an action from a function.
          ```
          prop: function(foo, bar){
              const baz = doSomething(foo, bar);
              dispatch(actionCreator(baz))
          },

          prop2: function(foo) {
              dispatch(actionCreator2(foo))
          },

          // prop2 could be written shorthand as

          prop2: actionCreator2(foo)
          ```
        * if `mapDispatchToProps` is not passed to `connect` (e.g. `connect()` or
          `connect(mapStateToProps)`) `store.dispatch` will be injected to the components props
* Redux - `redux`, `redux-thunk`, `redux-logger`,
  * Actions - actions are payloads of information that send data from your application to your store.
    * actions are objects that must have a property `type`.
    * action creators are functions that generate actions.
    * async action creators are functions that return a function instead of an action. By
      adding the `react-thunk` middleware, `redux.store.dispatch` can accept the function returned by async action creators and will invoke the function passing `redux.store.dispatch` as the first argument and
      `redux.store.getState` as the second.
  * Reducers - pure functions that take state and an action and based on the action
    return a new or unaltered form of the state.
      * `redux.combineReducers` is a helper function that turns an object whose values are different reducing functions into a single reducing function you can pass to
      `redux.createStore`
  * Stores
    * createStore takes a root function and optionally some initial state and optionally
      some middleware to apply
    * subscribe takes a callback function that gets invoked whenever the store is updated
    * dispatch takes an action or asyncAction if redux-thunk is installed and dispatches
      the action to the store.  It returns the dispatched action.
    * getState returns state
  * Middleware are functions used to act on an action before and after it gets passed to
    dispatch
      ```
      const someMiddleware = store => next => action => {
        //doSomethingBefore
        let result = next(action)
        //doSomethingAfter
        return result
      }
      ```
    * applyMiddleware
      ```
      let store = createStore(
        rootReducer,
        applyMiddleware(
          thirdMiddleWareToRun, // wraps the dispatch and is invoked last
          secondMiddleware,     // wraps the thirdMiddleWare so it is invoked second
          firstMiddleware       // wraps the secondMiddleWare so it is invoked first
        )
      )
      ```
    * redux-logger logs the action and before and previous state

* React Router - `react-router`
  * React Router is how you define your React application routes and what components
    should be rendered for those routes.  It is also the source of truth for the url
  * `<Router>` is typically passed the `react-router.browserHistory` to module and keeps
    and all of it's children are `<Route>`s.  It handles listening to the browserHistory
    and rerendering the routes
  * `<Route>` is typically passed a `path` and `component` attribute.  They can be nested
  * `<Link>` The primary way to allow users to navigate around your application.
     It will render a fully accessible anchor tag with the proper href.
     `<Link to={\`/users/${user.id}\`} activeClassName="active">{user.name}</Link>`
  * `<IndexLink>` An <IndexLink> is like a <Link>, except it is only active when
     the current route is exactly the linked route. It is equivalent to <Link>
     with the onlyActiveOnIndex prop set.
  * `withRouter` A HoC (higher-order component) that wraps another component to provide
    props.router. Pass in your component and it will return the wrapped component. All
    components passed to `<Route>` will already be passed props.router.
  * `<Redirect>` sets up a redirect to another route in your application to
    maintain old URLs.
  * `<IndexRoute>` allows you to provide a default "child" to a parent route when
    visitor is at the URL of the parent.
  * `<IndexRedirect>` allows you to redirect from the URL of a parent route to
    another route. They can be used to allow a child route to serve as the default
    route for its parent, while still keeping a distinct URL.

* How to run a node server using babel in dev, prod, and test contexts - https://github.com/babel/example-node-server
*

## Other Notes
eslint needs to run with --no-ignore in order to avoid messages with files being ignored

## Things to figure out

devtool: 'cheap-module-eval-source-map'
Read up more on the best source map given the context, i.e. dev, prod, etc. https://webpack.github.io/docs/configuration.html