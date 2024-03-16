import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <input
      className={styles.input}
      placeholder='검색'
    />
  )
}

export default SearchBar
