import App from './containers/App'
import { Route } from 'react-router'
import React from 'react'
import ObjectPage from './containers/ObjectPage'
import ObjectsPage from './containers/ObjectsPage'


export default (
  <Route path="/" component={App}>
    <Route path="/objects/" component={ObjectsPage} />
    <Route path="/objects/:objectId/" component={ObjectPage} />
  </Route>
)
