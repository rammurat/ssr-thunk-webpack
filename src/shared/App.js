import React, { Component } from 'react'
import routes from './routes'
import { Route, Switch } from 'react-router-dom'
import { Provider } from "react-redux";

//Load all containers
import NoMatch from "./containers/error/index"
import Home from "./containers/home/index"
//Load final store
import store from "./store";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Switch>
            {/* {routes.map(({ path, exact, component: Component, ...rest }) => (
              <Route key={path} path={path} exact={exact} render={(props) => (
                <Component {...props} {...rest} />
              )} />
            ))} */}
            <Route  exact  path="/"  component={Home} />
            <Route render={(props) => <NoMatch {...props} /> } />
            </Switch>
          </Provider>
      </div>
    )
  }
}

export default App