import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='App'>
        <nav id="navBar">
          <h2>
            <Link to="/">Movies List</Link>
            </h2>
            <Link to="/movie/1">Movie</Link>
            <Link to="/search">Search</Link>
        </nav>
        <h2>Movies List</h2>
      </div>
  )
}

export default App
