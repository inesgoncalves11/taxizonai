import Banner from "../../components/banner/banner";
import FormContacts from "../../components/form-contacts/form-contacts";
import styles from "./contacts.module.css";

export default function Contacts() {
  return (
    <>
      <Banner title="Contactos" />
      <div className={styles.container__contacts}>
        <div className={styles.container__grid}>
          <div className={styles.form__contact}>
            <h2> Entrar em contacto connosco...</h2>
            <h3 className={styles.form__subtitle}>
              Se precisa de mais informações sobre os nossos serviços pode
              entrar em contacto connosco através do nosso formulário.
            </h3>
            <FormContacts />
          </div>
          <div className={styles.grid__item}>
            <p className={styles.item__details}>
          
              <span className="material-symbols-outlined">mail</span>
              jorgefgoncalves@gmail.com
            </p>
            <p className={styles.item__details}>
              <span className="material-symbols-outlined">call</span>
              962418766
            </p>
            <p className={styles.item__details}>
              <span className="material-symbols-outlined">location_on</span>
              Lisboa, Portugal
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
