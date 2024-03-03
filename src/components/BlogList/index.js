import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {isLoading: true, blogData: []}

  componentDidMount() {
    this.getBlogdata()
  }

  getBlogdata = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(eachDataItem => ({
      id: eachDataItem.id,
      title: eachDataItem.title,
      imageUrl: eachDataItem.image_url,
      avatarUrl: eachDataItem.avatar_url,
      author: eachDataItem.author,
      topic: eachDataItem.topic,
    }))

    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, blogData} = this.state

    return (
      <div className="blogdata-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="blog-list">
            {blogData.map(eachBlog => (
              <BlogItem blogItemDetails={eachBlog} key={eachBlog.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
