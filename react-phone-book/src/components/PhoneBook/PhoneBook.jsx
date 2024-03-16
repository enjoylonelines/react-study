import Header from "../Header/Header"
import PhoneBookList from "../PhoneBookList/PhoneBookList"
import SearchBar from "../SearchBar/SearchBar"
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
