import { useState } from "react";
import Modal from "../modal/Modal";
import styles from "./Header.module.scss";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <p>연락처</p>
      <button onClick={() => setOpen(true)} className={styles.button}>+</button>
      <Modal isOpen={isOpen} setOpen={setOpen} />
    </header>
  )
}

export default Header
