import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies);
    if (!movies || movies.length === 0) return null
  return (
    <div>
        <h1 className='text-3xl py-5 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar space-x-2'>
            <div className='flex'>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MovieList
