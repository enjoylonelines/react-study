import { useEffect, useState } from "react";
import axios from "../../API/axios";
import { useLocation } from "react-router-dom"

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const searchTerm = query.get('q');
  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
      console.log(searchResults)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>

    </div>
  )
}

export default SearchPage
