import React, { Component } from 'react'
import { Title, StyledLink, Container } from './styles'
import { Mutation } from 'react-apollo'
import LOGIN_USER from './graphql'
import {
  Box,
  FormField,
  TextInput,
  Heading,
  Table,
  TableBody,
  TableCell,
  Anchor,
  Button
} from 'grommet'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onChange = (key, e) => {
    this.setState({ [key]: e.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Box border={{ color: 'dark-1' }} pad="xlarge" elevation="xlarge">
            <Heading size="small" color="dark-2">
              A Bite Of Home
            </Heading>
            <Title>Welcome Back!</Title>
            <FormField label="Email">
              <TextInput onChange={e => this.onChange('email', e)} />
            </FormField>
            <FormField label="Password">
              <TextInput onChange={e => this.onChange('password', e)} />
            </FormField>
            <Mutation mutation={LOGIN_USER}>
              {(loginUser, { data }) => (
                <Button
                  margin="xsmall"
                  label="Log-In"
                  color="dark-2"
                  type="submit"
                  size="large"
                  alignSelf="center"
                  onClick={() => {
                    loginUser({
                      variables: {
                        email: this.state.email,
                        password: this.state.password
                      }
                    })
                  }}
                />
              )}
            </Mutation>
            <Table alignSelf="center" margin="xsmall">
              <TableBody>
                <TableCell verticalAlign="bottom">
                  <StyledLink to="/">
                    <Anchor
                      hover={{ textDecoration: 'none' }}
                      label="Home"
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
        </Container>
      </React.Fragment>
    )
  }
}

export default Login
