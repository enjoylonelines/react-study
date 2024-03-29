import { useDispatch } from "react-redux";
import { delProfile, selectProfile } from "../../store/phoneBook";
import styles from "./PhoneBookItem.module.scss";
import { closeModal, openModal } from "../../store/modal";

const PhoneBookItem = ({ id, name }) => {
  const dispatch = useDispatch();
  
  function handleDelete(id) {
    dispatch(delProfile(id));
    dispatch(closeModal());
  }
   function handleSelect(id) {
     dispatch(selectProfile(id));
     dispatch(openModal('detail'));
  }
  return (
    <li className={styles.li} onClick={() => handleSelect(id)}>
      <p className={styles.p}>{name}</p>
      {/* <button 
        className={styles.button}
        onClick={() => handleDelete(id)}
      >
        삭제
      </button> */}
    </li>
  )
}

export default PhoneBookItem
