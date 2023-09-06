import styles from "./tours.module.css";
import Banner from "../../components/banner/banner";
import Image from "next/image";
import Link from "next/link";

export default function Tours() {
  return (
    <>
      <Banner title="Tours" />
      <div className={styles.container__tours}>
        <h2 className={styles.tours__title}>Escolha o seu destino</h2>
        <p className={styles.tours__subtitle}>
          Preparámos as melhores tours para descobrir os encantos das nossas
          cidades...
        </p>
        <div className={styles.tours__grid}>
          <article className={styles.tour__item}>
            <Link href="cities/lisboa">
              <a className={styles.tour__link}>
                <div className={styles.tour__images}>
                  <Image
                    className={styles.tour__image}
                    src="/img/lisboa.jpg"
                    alt="img"
                    height="230px"
                    width="280px"
                  />
                </div>
                <div className={styles.tour__info}>
                  <h3 className={styles.tour__name}> Lisboa</h3>
                </div>
              </a>
            </Link>
          </article>

          <article className={styles.tour__item}>
            <Link href="cities/sintra">
              <a className={styles.tour__link}>
                <div className={styles.tour__images}>
                  <Image
                    className={styles.tour__image}
                    src="/img/sinta.jpg"
                    alt="img"
                    height="230px"
                    width="280px"
                  />
                </div>
                <div className={styles.tour__info}>
                  <h3 className={styles.tour__name}> Sintra</h3>
                </div>
              </a>
            </Link>
          </article>

          <article className={styles.tour__item}>
            <Link href="cities/arrabida">
              <a className={styles.tour__link}>
                <div className={styles.tour__images}>
                  <Image
                    className={styles.tour__image}
                    src="/img/arrabida.jpg"
                    alt="Arrábida"
                    height="230px"
                    width="280px"
                  />
                </div>
                <div className={styles.tour__info}>
                  <h3 className="tour__name"> Arrábida</h3>
                </div>
              </a>
            </Link>
          </article>

          <article className={styles.tour__item}>
            <Link href="cities/evora">
              <a className={styles.tour__link}>
                <div className={styles.tour__images}>
                  <Image
                    className={styles.tour__image}
                    src="/img/evora.jpg"
                    alt="Évora"
                    height="230px"
                    width="280px"
                  />
                </div>
                <div className={styles.tour__info}>
                  <h3 className={styles.tour__name}> Évora</h3>
                </div>
              </a>
            </Link>
          </article>
          <article className={styles.tour__item}>
            <Link href="cities/coimbra">
              <a className={styles.tour__link}>
                <div className={styles.tour__images}>
                  <Image
                    className={styles.tour__image}
                    src="/img/coimbra.jpg"
                    alt="Coimbra"
                    height="230px"
                    width="280px"
                  />
                </div>
                <div className={styles.tour__info}>
                  <h3 className={styles.tour__name}> Lisboa - Coimbra</h3>
                </div>
              </a>
            </Link>
          </article>
          <article className={styles.tour__item}>
            <Link href="cities/porto">
              <a className={styles.tour__link}>
                <div className={styles.tour__images}>
                  <Image
                    className={styles.tour__image}
                    src="/img/porto.jpg"
                    alt="Porto"
                    height="230px"
                    width="280px"
                  />
                </div>
                <div className={styles.tour__info}>
                  <h3 className={styles.tour__name}> Lisboa - Porto</h3>
                </div>
              </a>
            </Link>
          </article>

          <article className={styles.tour__item}>
            <Link href="cities/fatima">
              <a className={styles.tour__link}>
                <div className={styles.tour__images}>
                  <Image
                    className={styles.tour__image}
                    src="/img/fatima.jpg"
                    alt="Fátima"
                    height="230px"
                    width="280px"
                  />
                </div>
                <div className={styles.tour__info}>
                  <h3 className={styles.tour__name}> Fátima </h3>
                </div>
              </a>
            </Link>
          </article>
          <article className={styles.tour__item}>
            <Link href="cities/madrid">
              <a className={styles.tour__link}>
                <div className={styles.tour__images}>
                  <Image
                    className={styles.tour__image}
                    src="/img/madrid.jpg"
                    alt="Madrid"
                    height="230px"
                    width="280px"
                  />
                </div>
                <div className={styles.tour__info}>
                  <h3 className={styles.tour__name}> Lisboa - Madrid </h3>
                </div>
              </a>
            </Link>
          </article>
        </div>
        <div className={styles.tours__personalize}>
          <h2> Não encontra o que procura?</h2>
          <p>
            Se nenhuma das nossas tours é do seu interesse pode entrar em
            contacto connosco para uma tour personalizada aos seus gostos!
          </p>
          <button className={styles.bot__contactform}>
            <Link href="/personalize">Tour personalizada </Link>
          </button>
        </div>
      </div>
    </>
  );
}
