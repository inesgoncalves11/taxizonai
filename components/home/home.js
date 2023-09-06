import styles from "./home.module.css";
import { FaTaxi, FaCheckCircle, FaPlaneDeparture } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className={styles.home}>
        <h2> O melhor conforto para as suas viagens </h2>
        <div className={styles.grid__home}>
          <div className={styles.item__home}>
            <i className={styles.icon__home}>
            
              <FaTaxi />
            </i>
            <p>Serviço de táxi 24h por dia </p>
          </div>
          <div className={styles.item__home}>
            <i className={styles.icon__home}>
            
              <FaCheckCircle />
            </i>
            <p>Segurança e higiene são o lema</p>
          </div>
          <div className={styles.item__home}>
            <i className={styles.icon__home}>
             
              <FaPlaneDeparture />
            </i>
            <p>Transfers e eventos</p>
          </div>
        </div>
      </section>
    </>
  );
}
