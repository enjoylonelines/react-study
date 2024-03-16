import { useDispatch } from "react-redux";
import { delProfile } from "../../store/phoneBook";
import styles from "./PhoneBookItem.module.scss";

const PhoneBookItem = ({ id, name }) => {
  const dispatch = useDispatch();
  
  function handleDelete(id) {
    dispatch(delProfile(id));
  }

  return (
    <li className={styles.li}>
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
