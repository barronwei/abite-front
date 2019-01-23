import React, { Component } from 'react'
import { FormField, TextInput, Button, Box } from 'grommet'
import { Container } from './styles'
// import { Mutation } from 'react-apollo'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  onChange = (key, e) => {
    this.setState({ [key]: e.target.value })
  }

  render() {
    return (
      <Container>
        <Box border={{ color: 'dark-1' }} pad="xlarge">
          <FormField>
            <TextInput
              placeholder="Town"
              size="medium"
              onChange={e => this.onChange('email', e)}
            />
          </FormField>

          <Button
            margin="xsmall"
            type="Submit"
            label="Bite"
            color="dark-2"
            onClick={() => {}}
          />
        </Box>
      </Container>
    )
  }
}

export default Search
