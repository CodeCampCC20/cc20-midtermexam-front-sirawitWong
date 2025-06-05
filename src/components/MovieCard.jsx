import { useNavigate } from "react-router"
import { useDetailId } from "../store/detailIDStore"
import { useFavoriteStore } from "../store/favoriteStore"
import {key} from "../utils/secret"

export default function MovieCard(props) {
    const {id, title, img, date, detail} = props
    const apiKey = key.apiKey
    const updateId = useDetailId(state => state.updateId)
    
    const navigate = useNavigate()
    const viewDetail = (ev)=> {
        updateId(ev.target.value)
        navigate("details")
    }

    const addToFavorite = (ev) => {
        const url = 'https://api.themoviedb.org/3/account/22056861/favorite';
        const options = {
        method: 'POST',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: apiKey
  },
        body: JSON.stringify({media_type: 'movie', media_id: ev.target.value, favorite: true})
};
fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
        
    }

    return (
        <div className="card card-side bg-base-100 shadow-sm mx-2">
        <figure>
        <img
        src={`https://image.tmdb.org/t/p/w92${img}`}
        alt="Movie_poster" />
        </figure>
        <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>release {date} </p>
        <p>{detail}</p>
        <div className="card-actions justify-end">
      <button onClick={(ev)=> addToFavorite(ev)} value={id} className="btn btn-primary">Favorite</button>
      <button onClick={(ev)=> viewDetail(ev)} value={id} className="btn btn-secondary">Details</button>
    </div>
  </div>
</div>
    )
}