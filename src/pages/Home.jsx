import { Navigate } from "react-router"
import { useLoginStore } from "../store/loginStore"
import {key} from "../utils/secret"
import { useEffect } from "react"
import { useMovieStore } from "../store/movieListStore"
import MovieCard from "../components/MovieCard"

export default function Home() {
    const isLogin = useLoginStore(state => state.isLogin)
    const apiKey = key.apiKey

    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: apiKey
  }
};

const movieList = useMovieStore(state => state.movieList)
const updateList = useMovieStore(state => state.updateList)

function getMovieList(){
    fetch(url, options)
    .then(res => res.json())
    .then(json => updateList(json))
    .catch(err => console.error(err));
}

    useEffect(() => {
        getMovieList()
    }, [])
    return (
        <>
            {isLogin ? "" :<Navigate to={"login"}/>}
            <div className="flex flex-row flex-wrap justify-center gap-2 ps-2">

            { movieList.results?.map((movie) => (
                <MovieCard key={movie.id} id={movie.id} title={movie.title} img={movie.poster_path} date={movie.release_date} detail={movie.overview}/>  
            ))
            }
            </div>
    
        </>
    )
}