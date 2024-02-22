import axios from "../../API/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { imageBasePath } from "../../constant";

const DetailPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState({});

  useEffect(() => {
  const fetchMovieData = async () => {
    const response = await axios.get(`/movie/${movieId}`);
    setMovies(response.data);
    console.log(response.data);
  }
  fetchMovieData();
  },[movieId])

  return (
    <section>
      <img 
        className="modal__poster-img" 
        src={`${imageBasePath}${movies.backdrop_path}`} 
        alt="modal__poster-img"
      />
    </section>
  )
}

export default DetailPage
