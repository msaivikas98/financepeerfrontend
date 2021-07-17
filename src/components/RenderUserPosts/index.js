import {Component} from 'react'

import RenderPostItem from '../RenderPostItem'

class RenderUserPosts extends Component {
  render() {
    const {userPostsList} = this.props
    const count = localStorage.getItem('count')
    if (count >= 1) {
      return (
        <div className="user-posts-list-container">
          {userPostsList.map(postItem => (
            <RenderPostItem postItem={postItem} />
          ))}
        </div>
      )
    }
    return <h1>no blogs yet</h1>
  }
}

export default RenderUserPosts
