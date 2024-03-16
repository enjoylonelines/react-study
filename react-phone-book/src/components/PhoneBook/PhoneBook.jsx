import Header from "../header/Header"
import PhoneBookList from "../phoneBookList/PhoneBookList"
import SearchBar from "../searchBar/SearchBar"
import styles from './PhoneBook.module.scss';

const PhoneBook = () => {
  
  return (
    <div className={styles.container}>
      <Header />
      <SearchBar />
      <PhoneBookList />     
    </div>
  )
}

export default PhoneBook
