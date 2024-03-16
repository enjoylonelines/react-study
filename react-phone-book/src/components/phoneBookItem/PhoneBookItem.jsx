import { useDispatch } from "react-redux";
import { delProfile, selectProfile } from "../../store/phoneBook";
import styles from "./PhoneBookItem.module.scss";

const PhoneBookItem = ({ id, name }) => {
  const dispatch = useDispatch();
  
  function handleDelete(id) {
    dispatch(delProfile(id));
  }
  function handleSelect(id) {
    dispatch(selectProfile(id));
  }
  return (
    <li className={styles.li} onClick={() => handleSelect(id)}>
      <p>{name}</p>
      <button 
        className={styles.button}
        onClick={() => handleDelete(id)}
      >
        삭제
      </button>
    </li>
  )
}

export default PhoneBookItem
