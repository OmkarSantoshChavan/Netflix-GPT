import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies= useSelector(store => store.movies)
  return (
    <div className='p-5 bg-black'>
        <div className='-mt-52 relative z-20'>
            <MovieList title={"Now playing movies"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Top rated movies"} movies={movies.topRatedMovies}/>
            <MovieList title={"Popular movies"} movies={movies.popularMovies}/>
            <MovieList title={"Upcoming movies"} movies={movies.upcomingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer
