import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
const VideoBackground = ({movieId}) => {
    
    useMovieTrailer({movieId});
    const trailerVideo = useSelector(store=>store.movies.trailerVideo)
    
    return (
        <div>
        <iframe 
           className='w-screen h-screen object-cover'
            src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&loop=1&playlist="+trailerVideo?.key+"&controls=0&rel=0&showinfo=0&modestbranding=1"}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin">
        </iframe>
        </div>
    )
}

export default VideoBackground
