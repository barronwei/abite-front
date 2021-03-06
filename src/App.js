import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from 'react-apollo'
import { theme, grommetTheme } from './theme'
import config from './config'
import { Grommet } from 'grommet'
import Home from './containers/Home/'
import ApolloClient from 'apollo-boost'
import Login from './containers/Home/components /LoginModal/Login'
import SignUp from './containers/Home/components /LoginModal/SignUp'
import Profile from './components/Profile'
import Favorites from './components/Favorites'

// creates new client
const client = new ApolloClient({
  uri: config.graphqlUrl
})

class App extends Component {
  render() {
    return (
      <Grommet theme={grommetTheme}>
        <Router>
          <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
              <div className="App">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Login" component={Login} />
                  <Route exact path="/Register" component={SignUp} />
                  <Route exact path="/Profile" component={Profile} />
                  <Route exact path="/Favorites" component={Favorites} />
                </Switch>
              </div>
            </ApolloProvider>
          </ThemeProvider>
        </Router>
      </Grommet>
    )
  }
}

export default App
