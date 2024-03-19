
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks.jsx/Bookmarks'
import Header from './Components/Header/Header'

function App() {

// state declaring for bookmarks
  const [bookmarks,setBookmarks] = useState([]);

  // event handler adding
  const handleAddtoBookmark = blog => {
    // console.log(blog);
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);

  }


  // state declaring for reading time
  const [readingTime,setReadingTime] = useState(0);

  const handleMarkAsRead = (id,time) => {
    // console.log(time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remove the marked as read

    const removeBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(removeBookmark);

  
  }

  

  
  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        {/* we can send a function as props */}
        <Blogs handleAddtoBookmark = {handleAddtoBookmark} handleMarkAsRead = {handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
    
    </>
  )
}

export default App
