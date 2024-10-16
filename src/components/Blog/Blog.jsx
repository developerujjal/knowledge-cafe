import PropTypes from 'prop-types';
import './Blog.css'


const Blog = ({ blog }) => {
    const { title, cover_img, reading_time, author_img, author, posted_date, hashtags  } = blog
    return (
        <div className='thubm-card'>
            <div className='thumb-img'>
                <img src={cover_img} alt={title} />
            </div>
            <div className='author-stuff-main'>
                <div className='author-stuff-container'>
                    <img src={author_img} alt="" />
                    <div className='author-name-container'>
                        <h3>{author}</h3>
                        <p><span>{posted_date}</span></p>
                    </div>
                </div>
                <div className='reading-time-container'>
                    <p><span>{reading_time}</span> Min Read</p>
                    <i className="material-icons">bookmark_added</i>
                </div>
            </div>
            <div className='thub-title'>
                <h1>{title}</h1>
            </div>
            <div className='thub-tags'>
                {
                    hashtags.map((tag, index)=> <span key={index}><a href="#">{tag}</a></span>)
                }
            </div>
            <div>
                <a href="#">Mark as read</a>
            </div>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;