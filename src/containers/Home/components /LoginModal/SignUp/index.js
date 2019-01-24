import React, { Component } from 'react'
import { Title, StyledLink, Container } from './styles'
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
import { Mutation } from 'react-apollo'
import CREATE_USER from './graphql'
// import { isUndefined } from 'util'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      hometown: ''
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
            <Title>Tell Us About Yourself</Title>
            <FormField>
              <TextInput
                placeholder="Name"
                onChange={e => this.onChange('name', e)}
              />
            </FormField>
            <FormField>
              <TextInput
                placeholder="Email"
                onChange={e => this.onChange('email', e)}
              />
            </FormField>
            <FormField>
              <TextInput
                placeholder="Password"
                onChange={e => this.onChange('password', e)}
              />
            </FormField>
            <FormField>
              <TextInput
                placeholder="What is your Hometown?"
                onChange={e => this.onChange('name', e)}
              />
            </FormField>
            <Mutation mutation={CREATE_USER}>
              {createUser => (
                <Button
                  margin="xsmall"
                  type="Submit"
                  label="Sign Up!"
                  color="dark-2"
                  onClick={() => {
                    createUser({
                      variables: {
                        input: {
                          name: this.state.name,
                          email: this.state.email,
                          password: this.state.password,
                          hometown: this.state.hometown
                        }
                      }
                    })
                  }}
                  onCompleted={data => {
                    if (data.createUser.sucess) {
                      const {
                        createUser: { token }
                      } = data
                      localStorage.setItem('token', token)
                      this.props.history.push('/')
                      this.props.authenticateUser()
                    }
                    return <div>data.createdUser.error.message</div>
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
                  <StyledLink to="/LogIn">
                    <Anchor
                      hover={{ textDecoration: 'none' }}
                      label="Log In"
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

// console.log(this.state.title)
export default SignUp
