import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Link } from 'react-router-dom'

export const Title = styled(Flex)`
  color: gray;
  font-size: 25px;
  margin-bottom: 20px;
`

export const LineInput = styled.input`
  height: 30px;
  width: 400px;
  margin-bottom: 20px;
  border-radius: 10px;
`
export const SubmitButton = styled(Flex)`
  color: white;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  background-color: #000000;
  align-self: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
export const SecondaryOptionText = styled(Flex)`
  color: gray;
  font-size: 12px;
  align-self: center;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

export const Container = styled(Flex)`
  /* background-color: ${({ theme }) => theme.colors.devLogo}; */
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const StyledLink = styled(Link)`
  font-size: 0.8rem;
  color: gray;
  text-decoration: none;
`

export const Wrapper = styled.section`
  width: 50%;
`
