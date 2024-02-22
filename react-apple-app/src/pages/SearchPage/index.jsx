import { useEffect, useState } from "react";
import axios from "../../API/axios";
import { useLocation, useNavigate } from "react-router-dom"
import './SearchPage.css'
import { useDebounce } from "../../hooks/useDebounce";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery().get('q');
  const deBounceTerm = useDebounce(query, 500);
  const navigate = useNavigate();

  useEffect(() => {
    if (deBounceTerm) {
      fetchSearchMovie(deBounceTerm);
    }
  }, [deBounceTerm]);

  const fetchSearchMovie = async (deBounceTerm) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${deBounceTerm}`
      );
      setSearchResults(response.data.results);
      //console.log(searchResults)

    } catch (error) {
      console.error(error);
    }
  }

  if (searchResults.length > 0) {
    return (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl =
              'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div
                  onClick={() => navigate(`/${movie.id}`)} // Tlqkf
                  className="movie__column-poster"
                >
                  <img
                    src={movieImageUrl}
                    alt="movie"
                    className="movie__poster"
                  />
                </div>
              </div>
            )
          }
        })}
      </section>
    )
  } else {
    return (
      <div className="no-results">
        <div className="no-results__text">
          <p>찾고자하는 검색어 '{deBounceTerm}'에 맞는 결과가 없습니다.</p>
        </div>
      </div>
    )
  }
}

export default SearchPage
