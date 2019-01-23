import React, { Component } from 'react'
import {
  TableRow,
  Box,
  Anchor,
  Table,
  TableBody,
  TableCell,
  Heading,
  Text
} from 'grommet'
import { Container } from './styles'
// import { Mutation } from 'react-apollo'

const name = 'Barron'
const hometown = 'Brooklyn'

class Profile extends Component {
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
          <Heading
            level={1}
            alignSelf="center"
            color="dark-2"
            margin={{ vertical: 'none' }}
          >
            A Bite of Home
          </Heading>
          <Heading
            level={3}
            alignSelf="center"
            color="dark-2"
            margin={{ vertical: 'medium' }}
          >
            Profile
          </Heading>
          <Table alignSelf="center" margin="medium">
            <TableBody>
              <TableRow>
                <TableCell verticalAlign="bottom">
                  <Heading
                    margin="xsmall"
                    level={4}
                    alignSelf="center"
                    color="dark-2"
                  >
                    Name
                  </Heading>
                </TableCell>
                <TableCell verticalAlign="bottom">
                  <Heading
                    margin="xsmall"
                    level={4}
                    alignSelf="center"
                    color="dark-2"
                  >
                    Hometown
                  </Heading>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell verticalAlign="bottom">
                  <Text alignSelf="center">{name}</Text>
                </TableCell>
                <TableCell verticalAlign="bottom">
                  <Text alignSelf="center">{hometown}</Text>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table alignSelf="center" margin="medium">
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
                  label="Favorites"
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

export default Profile
