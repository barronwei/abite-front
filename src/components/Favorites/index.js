import React, { Component } from 'react'
import {
  Box,
  Heading,
  FormField,
  TextInput,
  TextArea,
  Button,
  Table,
  TableBody,
  TableCell,
  Anchor,
  Menu
} from 'grommet'
import { Container } from './styles'
// import { Mutation } from 'react-apollo'

class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      content: ''
    }
  }

  onChange = (key, e) => {
    this.setState({ [key]: e.target.value })
  }

  render() {
    return (
      <Container>
        <Box border={{ color: 'dark-1' }} pad="xlarge">
          <Heading
            level={1}
            alignSelf="center"
            color="dark-2"
            margin={{ vertical: 'none' }}
          >
            A Bite of Home
          </Heading>
          <Heading
            level={4}
            alignSelf="center"
            color="dark-2"
            margin={{ top: 'medium' }}
          >
            Add Favorites
          </Heading>
          <FormField>
            <TextInput
              placeholder="Restaurant"
              size="medium"
              onChange={e => this.onChange('email', e)}
            />
          </FormField>
          <FormField>
            <TextArea
              placeholder="Tell Us More!"
              size="large"
              onChange={e => this.onChange('content', e)}
            />
          </FormField>
          <Button
            margin="xsmall"
            type="Submit"
            label="Add"
            color="dark-2"
            onClick={() => {}}
          />
          <Heading
            level={4}
            alignSelf="center"
            color="dark-2"
            margin={{ top: 'medium' }}
          >
            Remove Favorites
          </Heading>
          <Menu
            alignSelf="center"
            label="Favorites"
            margin="small"
            size="medium"
            items={[
              { label: 'First', onClick: {} },
              { label: 'Second', onClick: {} }
            ]}
          />
          <Table alignSelf="center" margin="xsmall">
            <TableBody>
              <TableCell verticalAlign="bottom">
                <Anchor
                  size="small"
                  textDecoration="underline"
                  hover={{ textDecoration: 'none' }}
                  label="Search"
                  color="dark-2"
                  onClick={() => {}}
                />
              </TableCell>
              <TableCell verticalAlign="bottom">
                <Anchor
                  size="small"
                  textDecoration="underline"
                  hover={{ textDecoration: 'none' }}
                  label="Sign Out"
                  color="dark-2"
                  onClick={() => {}}
                />
              </TableCell>
              <TableCell verticalAlign="bottom">
                <Anchor
                  size="small"
                  hover={{ textDecoration: 'none' }}
                  label="Profile"
                  color="dark-2"
                  onClick={() => {}}
                />
              </TableCell>
            </TableBody>
          </Table>
        </Box>
      </Container>
    )
  }
}

export default Favorites
