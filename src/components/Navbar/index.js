import React from 'react'
import { Container, StyledLink } from './styles'

const Navbar = () => (
  <Container>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/Login">Login</StyledLink>
    <StyledLink to="/Register">Register</StyledLink>
  </Container>
)

export default Navbar