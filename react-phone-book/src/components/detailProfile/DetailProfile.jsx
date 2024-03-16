import { useSelector } from "react-redux"
import styles from "./DetailProfile.module.scss";

const DetailProfile = () => {
    const { name, number } = useSelector(state => state.phoneBook.selectedProfile);
  return (
    <div className={styles.div}>
      <p>{name}</p>
      <p>{number}</p>
    </div>
  )
}

export default DetailProfile
