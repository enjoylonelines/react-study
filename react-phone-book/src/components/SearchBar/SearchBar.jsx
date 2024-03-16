import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.scss";
import { useRef } from "react";
import { checkSearchState, searchProfile } from "../../store/phoneBook";

const SearchBar = () => {
  const searchInput = useRef('');
  const dispatch = useDispatch();
  
  function handleSearch() {
    dispatch(searchProfile(searchInput.current.value)); //ref 값은 할당이 안됨?
    dispatch(checkSearchState(searchInput.current.value));
  }

  return (
    <input
      ref={searchInput}
      className={styles.input}
      placeholder='검색'
      onChange={handleSearch}
    />
  )
}

export default SearchBar
