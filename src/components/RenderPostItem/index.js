import {Component} from 'react'

import './index.css'

class RenderPostItem extends Component {
  render() {
    const {postItem} = this.props
    // console.log(postItem)
    const userId = postItem.user_id
    const postId = postItem.post_id
    const {title, body} = postItem

    return (
      <div className="post-item-container">
        <div className="post-item-ids-container">
          <p className="post-item-user-id">userId: {userId}</p>
          <p className="post-item-post-id">postId: {postId}</p>
        </div>
        <h1 className="post-item-title">{title}</h1>
        <p className="post-item-body">{body}</p>
      </div>
    )
  }
}

export default RenderPostItem
