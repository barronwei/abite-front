import React, { Component } from 'react'
import {
  Button,
  Box,
  Anchor,
  Table,
  TableBody,
  TableCell,
  Heading
} from 'grommet'
import { Container, StyledLink, Wrapper } from './styles'
import LocationSearchInput from './components/LocationSearchInput'

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

  onValue = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Box border={{ color: 'dark-1' }} pad="xlarge" elevation="large">
            <Heading level={3} alignSelf="center" color="dark-2">
              A Bite of Home
            </Heading>
            <LocationSearchInput
              value={this.state.value}
              onValue={this.onValue}
            />
            <Button
              margin="xsmall"
              type="Submit"
              label="Bite"
              color="dark-2"
              onClick={() => console.log(this.state.value)}
            />
            <Table alignSelf="center" margin="xsmall">
              <TableBody>
                <TableCell verticalAlign="bottom">
                  <StyledLink to="/LogIn">
                    <Anchor
                      hover={{ textDecoration: 'none' }}
                      label="Log In"
                      color="dark-2"
                    />
                  </StyledLink>
                </TableCell>
                <TableCell verticalAlign="bottom">
                  <StyledLink to="/Register">
                    <Anchor
                      hover={{ textDecoration: 'none' }}
                      label="Sign Up"
                      color="dark-2"
                    />
                  </StyledLink>
                </TableCell>
              </TableBody>
            </Table>
          </Box>
        </Wrapper>
      </Container>
    )
  }
}

export default Profile
