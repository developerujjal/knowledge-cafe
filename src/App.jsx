import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks]= useState([])
  const [readingtime, setReadingTime]= useState(0)

  const handleAddBookmarks = (blog)=>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleReadingTime = (time) =>{
    const makeNum = parseInt(time);
    const newReadingTime = readingtime + makeNum;
    setReadingTime(newReadingTime)
  }




  return (
    <>
      <Header></Header>
      <main>
        <div className='container'>
          <div className='blogs-bookmarks-wrapper'>
            <Blogs handleAddBookmarks={handleAddBookmarks} handleReadingTime={handleReadingTime}></Blogs>
            <Bookmarks bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
          </div>
        </div>
      </main>

    </>
  )
}

export default App
