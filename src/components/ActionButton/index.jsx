import styles from "./styles.module.scss";

function ActionButton({ title, imageSrc }) {
  return(
    <div className={styles.container}>
      <h1>{title}</h1>
      <img src={imageSrc} />
    </div>
  )
}

export { ActionButton };
