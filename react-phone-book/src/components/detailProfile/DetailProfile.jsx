import { useDispatch, useSelector } from "react-redux"
import styles from "./DetailProfile.module.scss";
import { closeModal } from "../../store/modal";
import { delProfile } from "../../store/phoneBook";

const DetailProfile = () => {
  console.log('render');
  const {id, name, number} = useSelector(state => state.phoneBook.selectedProfile);
  const dispatch = useDispatch();
  
  function handleClose() {
    dispatch(closeModal());  
  }
  function handleDelete(id) {
    dispatch(delProfile(id));
    dispatch(closeModal());
  }
  
  return (
    <div className={styles.div}>
      <p className={styles.p}>이름: {name}</p>
      <p className={styles.p}>번호: {number}</p>
      <button 
        id={styles.del} 
        className={styles.button}
        onClick={() => handleDelete(id)}
      >
        삭제
      </button>

      <button 
        id={styles.close} 
        className={styles.button} 
        onClick={handleClose}
      >
        닫기
      </button>
    </div>
  )
}

export default DetailProfile
