import styles from './Gift.module.css'; 

const Gift = () => {
  return (
    <div className={styles.gift}>
      <div className={styles.gift__rope}></div>
      <div className={`${styles.gift__rope} ${styles['gift__rope-horizontal']}`}></div>
      <div className={styles.gift__cap}></div>
      <div className={styles.gift__box}></div>
    </div>
  )
}

export default Gift;