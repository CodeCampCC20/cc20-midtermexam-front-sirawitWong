import { useEffect,useState } from "react";
import { useDetailId } from "../store/detailIDStore"
import {key} from "../utils/secret" 

export default function Details() {
    const id = useDetailId(store => store.id)
    const apiKey = key.apiKey
    const [detail, setDetail] = useState()
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: apiKey
  }
};

function getDetail() {
    fetch(url, options)
    .then(res => res.json())
    .then(json => setDetail(json))
    .catch(err => console.error(err));
}

useEffect(()=> {
    getDetail()
},[])
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
            <img
                src={`https://image.tmdb.org/t/p/w500${detail?.poster_path}`}
                alt={detail?.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {detail?.title}
                <div className="badge badge-secondary">{detail?.status}</div>
            </h2>
    <p>{detail?.overview}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{detail?.runtime} minute</div>
    </div>
  </div>
</div>

        </div>
    )
}