import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
// import PropTypes from 'prop-types';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBoormark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
    console.log(bookmarks)
  }
  const [readTime, setReadTime] = useState(0);

  const handleAddReadTime = (readingTime, id) => {
    setReadTime(readTime + readingTime);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks);
    // console.log(id)

  }


  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleAddBoormark={handleAddBoormark} handleAddReadTime={handleAddReadTime}></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readTime={readTime}
        ></Bookmarks>
      </div>

    </>
  )
}
// App.propTypes = {
//   // blog: PropTypes.object.isRequired,
//   bookmarks: PropTypes.array
// }

export default App
