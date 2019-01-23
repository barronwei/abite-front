import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from 'react-apollo'
import theme from './theme'
import config from './config'
import { Grommet } from 'grommet'
import Home from './containers/Home/'
import ApolloClient from 'apollo-boost'
import Login from './containers/Home/components /LoginModal/Login'
import SignUp from './containers/Home/components /LoginModal/SignUp'

// creates new client
const client = new ApolloClient({
  uri: config.graphqlUrl
})

const myTheme = {
  global: {
    font: {
      family: 'Roboto'
    }
  }
}

class App extends Component {
  render() {
    return (
      <Grommet plain>
        <Router>
          <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
              <div className="App">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Login" component={Login} />
                  <Route exact path="/Register" component={SignUp} />
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
