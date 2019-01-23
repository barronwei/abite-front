import React, { Component } from 'react'
import Favorites from '../../components/Favorites'
import Navbar from '../../components/Navbar/'
// import LoginModal from '../Home/components/LoginModal'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Favorites />
        <Navbar />
      </React.Fragment>
    )
  }
}

export default Home
