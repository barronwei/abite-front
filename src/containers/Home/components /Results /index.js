import React, { Component } from 'react'
import { Box, Button } from 'grommet'
import { Mutation } from 'react-apollo'

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titles: []
    }
  }

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

export default Results
