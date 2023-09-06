import styles from "./form-contacts.module.css";

export default function FormContacts() {
  return (
    <>
      <form action="GET" className={styles.contact_form} noValidate>
        <label className={styles.contact_form__label}>Nome</label>
        <input
          type="text"
          className={styles.contact_form__input}
          id={styles.cf_name}
          name="cf_name"
        />

        <label className={styles.contact_form__label}>Email</label>
        <input
          type="text"
          className={styles.contact_form__input}
          id={styles.cf_email}
          name="cf_email"
        />

        <label className={styles.contact_form__label}>Assunto</label>
        <input
          type="text"
          className={styles.contact_form__input}
          id={styles.cf_subject}
          name="cf_subject"
        />

        <label className={styles.contact_form__label}>Mensagem</label>
        <textarea
          name="cf_message"
          id={styles.cf_message}
          className={styles.contact_form__input}
          rows="6"
        ></textarea>
        <button className={styles.contact_form__submit} type="submit">
          Enviar
        </button>
      </form>
    </>
  );
}
