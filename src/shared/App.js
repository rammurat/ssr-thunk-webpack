import React, { Component } from 'react'
import routes from './routes'
import { Route, Switch } from 'react-router-dom'
import { Provider } from "react-redux";
import configureStore from './store/index'

//Load all containers
import NoMatch from "./containers/error/index"
import Home from "./containers/home/index"
import PSP from "./containers/home/index"

import {HomePageData} from '../shared/api/home-page'
import {PSPPageData} from '../shared/api/psp'

//Load final store
const initialState = {}
const store = configureStore(initialState)

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Switch>
            <Route path="/"  component={Home} {...HomePageData} />
            <Route path="/psp"  component={PSP} {...PSPPageData} />
            <Route render={(props) => <NoMatch {...props} /> } />
            </Switch>
          </Provider>
      </div>
    )
  }
}

export default App