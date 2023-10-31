import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title} = bookmark;
    return (
        <div className='rounded bg-gray-200 my-2 '>
            <h4 className='p-4'>{title}</h4>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
    // handleAddBoormark: PropTypes.func
}
export default Bookmark;