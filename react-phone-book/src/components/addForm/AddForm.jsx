import React from 'react'
import styles from "./AddForm.module.scss";
import { useRef } from "react";
import { addProfile } from "../../store/phoneBook";
import { useDispatch } from "react-redux";
import { toggleModal } from '../../store/modal';

const AddForm = () => {
  const nameInput = useRef('');
  const numberInput = useRef('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const newProfile = {
      id: Date.now(),
      name: nameInput.current.value,
      number: numberInput.current.value,
    }
    dispatch(addProfile(newProfile));
    nameInput.current.value = '';
    numberInput.current.value = '';
    dispatch(toggleModal());
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.div}>
        <label name="name" >이름</label>
        <input
          ref={nameInput}
          name="name"
          type="text"
        />
      </div>
      <div className={styles.div}>
        <label name="phone-number" >연락처</label>
        <input
          ref={numberInput}
          name="phone-number"
          type="number"
        />
      </div>
      <div>
        <button
          className={styles.button}
          type="submit"
        >
          번호 추가
        </button>
        <button onClick={() => dispatch(toggleModal())}>취소</button>
      </div>
    </form>
  )
}

export default AddForm
