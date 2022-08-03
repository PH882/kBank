import styles from "./styles.module.scss";

function ActionButton({ title, imageSrc }) {
  return(
    <div className={styles.container}>
      <img src={imageSrc} />
      <h1>{title}</h1>
    </div>
  )
}

export { ActionButton };
