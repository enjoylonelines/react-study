import { useSelector } from "react-redux";
import styles from "./PhoneBookList.module.scss";
import PhoneBookItem from "../phoneBookItem/PhoneBookItem";

const PhoneBookList = () => {
  const { profiles, searchs, isSearch } = useSelector(state => state.phoneBook);
  
  return (
    <ol className={styles.ol}>
      {!isSearch && profiles.map(list => {
        const { id, name } = list;
        return <PhoneBookItem key={id} id={id} name={name} />
      })}

      {isSearch && searchs.map(list => {
        const {id, name } = list;
        return <PhoneBookItem key={id} id={id} name={name} />
      })}
    </ol>
  )
}

export default PhoneBookList
