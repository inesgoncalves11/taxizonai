import FormContacts from "../form-contacts/form-contacts";
import styles from "./overlay.module.css";

export default function Overlay({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.overlay__background} onClick={onClose} />
          <div className={styles.overlay__container}>
            <div className={styles.overlay__controls}>
              <button
                className={styles.overlay__close}
                type="button"
                onClick={onClose}
              />
            </div>
            <h2> Entre em contacto connosco:</h2>
            <FormContacts />
          </div>
        </div>
      )}
    </>
  );
}
