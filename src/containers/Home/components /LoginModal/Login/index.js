import React, { Component } from 'react'
import { Title, SecondaryOptionText, Container, SubmitButton } from './styles'
import Navbar from '../../../../../components/Navbar'
import Welcome from '../../../../../components/Welcome'
import { Mutation } from 'react-apollo'
import LOGIN_USER from './graphql'
import { Box, FormField, TextInput, Heading } from 'grommet'

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
        <Welcome />
        <Navbar />

        <Container>
          <Box border={{ color: 'dark-1' }} pad="xlarge">
            <Heading size="small">A Bite Of Home</Heading>
            <Title>Welcome Back!</Title>
            <FormField label="Email">
              <TextInput onChange={e => this.onChange('email', e)} />
            </FormField>
            <FormField label="Password">
              <TextInput onChange={e => this.onChange('password', e)} />
            </FormField>
            <Mutation mutation={LOGIN_USER}>
              {(loginUser, { data }) => (
                <SubmitButton
                  type="submit"
                  size="large"
                  onClick={() => {
                    loginUser({
                      variables: {
                        email: this.state.email,
                        password: this.state.password
                      }
                    })
                  }}
                >
                  Login
                </SubmitButton>
              )}
            </Mutation>
            <SecondaryOptionText
              onClick={this.props.changeMode}
              alignSelf="center"
            >
              Or Sign Up
            </SecondaryOptionText>
          </Box>
        </Container>
        {/* <Mutation mutation={LOGIN_USER}>
          {(loginUser, { data }) => (
            <Button
              onClick={() => {
                loginUser({
                  variables: {
                    email: this.state.email,
                    password: this.state.password
                  }
                })
              }}
            >
              Login
            </Button>
          )}
        </Mutation> */}
      </React.Fragment>
    )
  }
}

export default Login
