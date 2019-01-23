import React, { Component } from 'react'
import SearchBar from '../../components/Searchbar'
import Navbar from '../../components/Navbar/'
// import LoginModal from '../Home/components/LoginModal'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <Navbar />
      </React.Fragment>
    )
  }
}

export default Home
