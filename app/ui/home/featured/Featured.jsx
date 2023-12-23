import styles from "./featured.module.css"
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>NICER CAVES</b>
      </h1>
      <h1 className={styles.subtitle}><b>NICER Program: Center for Assessment Cave Ecosystem (CAVE) in CALABARZON</b></h1>
    </div>
  )
}

export default Featured