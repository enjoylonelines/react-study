import ReactModal from "react-modal"
import AddForm from "../addForm/AddForm";
import { useSelector } from "react-redux";
import DetailProfile from "../detailProfile/DetailProfile";

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

const Modal = () => {
  const { isOpen, type } = useSelector(state => state.modal);

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      {type === 'detail' && <DetailProfile />}
      {type === 'add' && <AddForm />}
    </ReactModal>
  )
}

export default Modal
