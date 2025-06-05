import { useNavigate } from "react-router"
import { useDetailId } from "../store/detailIDStore"
import { useFavoriteStore } from "../store/favoriteStore"

export default function MovieCard(props) {
    const {id, title, img, date, detail} = props
    const updateId = useDetailId(state => state.updateId)
    const updateList = useFavoriteStore(state => state.updateList)

    const navigate = useNavigate()
    const viewDetail = (ev)=> {
        updateId(ev.target.value)
        navigate("details")
    }

    const addToFavorite = (ev) => {
        console.log(ev.target.value)
        updateList(ev.target.value)
        
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