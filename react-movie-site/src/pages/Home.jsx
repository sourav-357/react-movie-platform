

import React, { useState } from 'react'
import MovieCard from '../components/MovieCard'



function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1998" },
        { id: 3, title: "Inception", release_date: "2023" }
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return (
        <div className='home'>

            <form onSubmit={handleSearch} className='search-form'>
                <input
                    type="text"
                    placeholder='search for movies...'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className='search-button' type='submit'>Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) =>
                    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
                        <MovieCard movie={movie} key={movie.id} />
                    )
                )}
            </div>
        </div>
    )
}

export default Home

