

import MovieCard from './components/MovieCard'
import './App.css'


function App() {
  return (
    <>
      <MovieCard movie={{ title: "Tim's Film", release_date: "2024" }} />
      <MovieCard movie={{ title: "Sourav Movie", release_date: "2025" }} />
    </>
  )
}


export default App
