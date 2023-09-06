import styles from "./services.module.css";
import Image from "next/image";
import PhoneIcon from "../../public/icons/iconphone.svg";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.services}>
          <h2 className={styles.services__header}>Os nossos serviços</h2>

          <div className={styles.section__services}>
            <div className={styles.services__item}>
              <h3>Táxi</h3>
              <p className={styles.taxi__subtitle}>
                Dispomos de serviço de táxi na área de Lisboa disponível todos
                os dias
              </p>
              <p className={styles.icon__services}>
                <Image src={PhoneIcon} alt="icon phone" height="50px"></Image>
              </p>
              <button className={styles.button__more}>Ligar agora</button>
            </div>
            <div className={styles.services__item}>
              <h3>Tranfers</h3>
              <p className={styles.item__tranfers}>
                Serviço de tranfers e eventos privados
              </p>
              <ul className={styles.services__tranfers}>
                <li>Internet gratuíta</li>
                <li>Até 8 passageiros</li>
                <li>Sem taxas e cancelamento gratuito</li>
              </ul>
              <button className={styles.button__more}>
                <Link href="/contacts/">Reservar</Link>
              </button>
            </div>
            <div className={styles.services__item}>
              <h3>Tours</h3>
              <p className={styles.tours__subtitle}>
                Venha conhecer Portugal connosco:
              </p>
              <ul className={styles.tours__list}>
                <li>Lisboa</li>
                <li>Sintra</li>
                <li>Fátima</li>
                <li>Porto</li>
              </ul>
              <button className={styles.button__more}>
                <Link href="/tours/tours">Tours</Link>
              </button>
            </div>
            <div className={styles.services__item}>
              <h3>Tour Personalizada</h3>
              <p className={styles.item__personalize}>
                Poderá escolher quais os locais que pretende visitar, quantos
                dias e o número de passageiros.
              </p>
              <button className={styles.button__more}>
                <Link href="/personalize/">Personalizar</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
