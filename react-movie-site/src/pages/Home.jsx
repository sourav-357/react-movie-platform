

import React from 'react'
import MovieCard from '../components/MovieCard'

function Home() {

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 1, title: "Terminator", release_date: "1998" },
        { id: 1, title: "Inception", release_date: "2023" }
    ]

    const handleSearch = () => {

    }

    return (
        <div className='home'>

            <form onSubmit={handleSearch} className='search-form'>
                <input
                    type="text"
                    placeholder='search for movies...'
                    className='search-input'
                />
                <button className='search-button' type='submit'>Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    )
}

export default Home

