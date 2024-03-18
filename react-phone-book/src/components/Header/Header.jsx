import Modal from "../modal/Modal";
import styles from "./Header.module.scss";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modal";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <p>연락처</p>
      <button onClick={() => dispatch(openModal('add'))} className={styles.button}>+</button>
      <Modal/>
    </header>
  )
}

export default Header
