import React, { Component } from 'react'
import { Box, Button } from 'grommet'
import { Mutation, graphql } from 'react-apollo'
import { SEARCH_RESULTS } from './graphql'

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titles: []
    }
  }

  populateList = this.setState({ titles: ResultsQuery, ...this.state.titles })

  listTitles = this.state.titles.map(el => {
    return (
      <li>
        <Box border={{ color: 'dark-1' }}>
          {el}
          <Button>Comments</Button>
        </Box>
      </li>
    )
  })

  render() {
    return (
      <React.Component>
        <ul>
          <listTitles />
        </ul>
      </React.Component>
    )
  }
}

const ResultsQuery = graphql(SEARCH_RESULTS, { name: 'retrieveresultsQuery' })
export default Results
