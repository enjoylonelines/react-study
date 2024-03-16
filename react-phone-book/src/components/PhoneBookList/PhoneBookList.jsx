import { useSelector } from "react-redux";
import styles from "./PhoneBookList.module.scss";

const PhoneBookList = () => {
  const profiles = useSelector(state => state.phoneBook.profiles);
  
  return (
    <ol className={styles.ol}>
      {profiles.map(list => {
        const { id, name } = list;
        return <li key={id} className={styles.li}>{name}</li>
      })}
    </ol>
  )
}

export default PhoneBookList
