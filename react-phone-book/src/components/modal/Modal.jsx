import ReactModal from "react-modal"
import styles from "./Modal.module.scss";

// 모달 스타일을 지정할 CSS 객체
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  content: {
    width: '17rem',
    height: '25rem',
    backgroundColor: 'black',
    position: 'fixed',
    top: '53%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
  }
};

const Modal = ({ isOpen, setOpen }) => {
  return (
    <ReactModal 
      isOpen={isOpen} 
      //className={styles.modal}
      style={customStyles}
    >
      <div>모달입니다</div>
      <button onClick={() => setOpen(false)}>모달닫기</button>
    </ReactModal>
  )
}

export default Modal
