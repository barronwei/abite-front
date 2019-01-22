import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from 'react-apollo'
import theme from './theme'
import config from './config'
import Home from './containers/Home/'
import ApolloClient from 'apollo-boost'

// creates new client
const client = new ApolloClient({
  uri: config.graphqlUrl
})

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <div className="App">
              <Switch>
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
