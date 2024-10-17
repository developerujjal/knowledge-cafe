import PropTypes from 'prop-types';
import './Blog.css'


const Blog = ({ blog, handleAddBookmarks, handleReadingTime }) => {
    const { title, cover_img, reading_time, id, author_img, author, posted_date, hashtags } = blog
    return (
        <div className='thubm-card'>
            <div className='thumb-img'>
                <img src={cover_img} alt={title} />
            </div>
            <div className='author-stuff-main'>
                <div className='author-stuff-container'>
                    <div className='card-img-author'>
                        <img src={author_img} alt="" />
                    </div>
                    <div className='author-name-container'>
                        <h3>{author}</h3>
                        <p><span>{posted_date}</span></p>
                    </div>
                </div>
                <div className='reading-time-container'>
                    <p><span>{reading_time}</span> Min Read</p>
                    <i onClick={() => handleAddBookmarks(blog)} className="material-icons">bookmark_added</i>
                </div>
            </div>
            <div className='thub-title'>
                <h1>{title}</h1>
            </div>
            <div className='thub-tags'>
                {
                    hashtags.map((tag, index) => <span key={index}><a href="#">{tag}</a></span>)
                }
            </div>
            <div className='btn-container'>
                <button onClick={() => handleReadingTime(reading_time, id)}>Mark as Read</button>
            </div>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blog;