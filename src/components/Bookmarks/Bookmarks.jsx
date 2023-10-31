import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks,readTime }) => {

    return (
        <div className="md:w-1/3">
            <div>
                <h3 className='bg-orange-100 my-4 p-4 rounded-lg'>Spent Time on Read: {readTime}</h3>
            </div>
            <h2>Bookmarks Bar: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}
                readTime={readTime}></Bookmark>)
            }

        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readTime: PropTypes.number.isRequired
    // handleAddBoormark: PropTypes.func
}
export default Bookmarks;