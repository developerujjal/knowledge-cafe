import PropTypes from 'prop-types';
import './Bookmark.css'

const Bookmark = ({singelBlog}) => {
    const {title}= singelBlog;
    return (
        <div className='bookmark-title-container'>
            <h3>{title}</h3>
        </div>
    );
};

Bookmark.propTypes={
    singelBlog: PropTypes.object.isRequired
}

export default Bookmark;