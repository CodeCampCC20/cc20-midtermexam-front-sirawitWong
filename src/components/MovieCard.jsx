import { useNavigate } from "react-router"

export default function MovieCard(props) {
    const {id, title, img, date, detail} = props
    const navigate = useNavigate()
    const viewDetail = ()=> {
        navigate("details")
    }


    const addToFavorite = () => {
        console.log("added")
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
        <p>release {date} {id} </p>
        <p>{detail}</p>
        <div className="card-actions justify-end">
      <button onClick={addToFavorite} className="btn btn-primary">Favorite</button>
      <button onClick={viewDetail} className="btn btn-secondary">Details</button>
    </div>
  </div>
</div>
    )
}