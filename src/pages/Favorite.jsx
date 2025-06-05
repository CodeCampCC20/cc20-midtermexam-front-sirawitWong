import { Navigate } from "react-router"
import { useLoginStore } from "../store/loginStore"
import {key} from "../utils/secret"
import { useEffect } from "react"
import { useFavoriteStore } from "../store/favoriteStore"
import MovieCard from "../components/MovieCard"

export default function Favorite() {
    const isLogin = useLoginStore(state => state.isLogin)
    const apiKey = key.apiKey

    const url = 'https://api.themoviedb.org/3/account/22056861/favorite/movies?language=en-US&page=1&sort_by=created_at.asc';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: apiKey
  }
};

const favoriteList = useFavoriteStore(store => store.favoriteList)
const updateList = useFavoriteStore(store => store.updateList)

function getFavoriteList(){    
    fetch(url, options)
    .then(res => res.json())
    .then(json => updateList(json))
    .catch(err => console.error(err));
}

    useEffect(()=> {
        getFavoriteList()
    }, [])
    console.log(favoriteList)
    return (
        <>
            {isLogin ? "" : <Navigate to={"/login"}/>}
            <div className="flex flex-row flex-wrap justify-start gap-2 ps-2">
                { favoriteList.results?.map((movie) => (
                <MovieCard key={movie.id} id={movie.id} title={movie.title} img={movie.poster_path} date={movie.release_date} detail={movie.overview}/>  
            ))
            }
            </div>
        </>
    )
}