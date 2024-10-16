import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {


  return (
    <>
      <Header></Header>
      <main>
        <div className='container'>
          <div className='blogs-bookmarks-wrapper'>
            <Blogs></Blogs>
            <Bookmarks></Bookmarks>
          </div>
        </div>
      </main>

    </>
  )
}

export default App
