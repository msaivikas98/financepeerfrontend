import Cookies from 'js-cookie'

import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {
    postsList: [],
    putIntoDb: false,
  }

  handleFileChange = e => {
    const file = e.target.files[0]
    // console.log(file)
    const reader = new FileReader()
    reader.readAsText(file)
    // console.log(reader.result)
    reader.onload = () => {
      this.setState({postsList: reader.result, putIntoDb: true})
    }
  }

  doFetch = async eachItem => {
    localStorage.setItem('count', 1)
    const jwtToken = Cookies.get('jwt_token')
    const url = 'http://localhost:3002/posts'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(eachItem),
    }
    const response = await fetch(url, options)
    console.log('123')
    const data = await response.json()
    console.log('1221')
    console.log(data)
  }

  putIntoDatabase = async postsList => {
    const postsList2 = JSON.parse(postsList)

    postsList2.map(eachItem => this.doFetch(eachItem))
  }

  render() {
    localStorage.removeItem('count')
    const {putIntoDb, postsList} = this.state
    console.log(putIntoDb)
    if (putIntoDb === true) {
      this.putIntoDatabase(postsList)
    }

    // console.log(postsList)
    return (
      <>
        {console.log(1)}
        <Header />
        <div className="home-container">
          <div className="file-upload-container">
            <h1 className="upload-file-heading">upload file</h1>
            <img
              className="file-upload-image"
              src="https://res.cloudinary.com/db4grxgst/image/upload/v1626473302/download_ejdxpu.png"
              alt="upload"
            />
            <input
              className="choose-file-input"
              type="file"
              onChange={this.handleFileChange}
            />
          </div>
        </div>
      </>
    )
  }
}

export default Home
