import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, topic, avatarUrl, author, title} = blogItemDetails

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="item-link">
        <div className="item-container">
          <img src={imageUrl} className="item-image" alt={`item{id}`} />
          <div className="item-info">
            <p className="item-topic">{topic}</p>
            <h1 className="item-title">{title}</h1>
            <div className="author-info">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
