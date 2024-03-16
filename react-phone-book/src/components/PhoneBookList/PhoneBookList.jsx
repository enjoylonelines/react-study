import { useSelector } from "react-redux";
import styles from "./PhoneBookList.module.scss";
import PhoneBookItem from "../phoneBookItem/PhoneBookItem";
import Modal from "../modal/Modal";
import React from "react";

const PhoneBookList = () => {
  const { profiles, searchs, isSearch } = useSelector(state => state.phoneBook);

  return (
    <ol className={styles.ol}>
      {!isSearch && profiles.map(list => (
          <React.Fragment key={list.id}>
            <PhoneBookItem id={list.id} name={list.name} />
            <Modal type="detail" />
          </React.Fragment>
      ))}

      {isSearch && searchs.map(list => (
          <React.Fragment key={list.id}>
            <PhoneBookItem id={list.id} name={list.name} />
            <Modal type="detail" />
          </React.Fragment>
      ))}
    </ol>
  )
}

export default PhoneBookList
