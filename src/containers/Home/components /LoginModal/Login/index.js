import React, { Component } from 'react'
import { Title, StyledLink, Container, Wrapper } from './styles'
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
          <Wrapper>
            <Box border={{ color: 'dark-1' }} pad="xlarge" elevation="xlarge">
              <Heading size="small" color="dark-2" alignSelf="center">
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
                {loginUser => (
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
                      document.location.href = 'Profile'
                    }}
                    onComplete={data => {
                      if (data.loginUser.success) {
                        const {
                          loginUser: { token }
                        } = data
                        localStorage.setItem('token', token)
                        this.props.authenticateUser()
                      }
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
          </Wrapper>
        </Container>
      </React.Fragment>
    )
  }
}

export default Login
