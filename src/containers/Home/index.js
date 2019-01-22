import React, { Component } from 'react'
import Welcome from '../../components/Welcome'
import Navbar from '../../components/Navbar/'
// import LoginModal from '../Home/components/LoginModal'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Welcome />
        <Navbar />
      </React.Fragment>
    )
  }
}

export default Home
