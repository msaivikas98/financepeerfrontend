import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

import RenderUserPosts from '../RenderUserPosts'

class userPosts extends Component {
  state = {
    renderUserPosts: false,
    userPostsList: [],
  }

  componentDidMount() {
    console.log('component did mount')

    this.getUserPosts()
    this.setState({renderUserPosts: true})
  }

  getUserPosts = async () => {
    const apiUrl = 'http://localhost:3002/posts/1/'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    this.setState({userPostsList: data})
  }

  render() {
    const {renderUserPosts, userPostsList} = this.state
    if (renderUserPosts === false) {
      return <h1>Loading.....</h1>
    }
    // console.log(userPostsList)

    return (
      <>
        <Header />
        <div className="posts-bg-container">
          <div className="posts-container">
            <RenderUserPosts userPostsList={userPostsList} />
          </div>
        </div>
      </>
    )
  }
}

export default userPosts
