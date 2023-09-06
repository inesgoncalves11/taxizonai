import styles from "./about.module.css";
import Image from "next/future/image";
import picOne from "../../public/img/taxi-slideshow1.jpeg";
import picTwo from "../../public/img/taxi-slideshow2.jpeg";
import picThree from "../../public/img/taxi-three.jpg";
import picFour from "../../public/img/taxi-four.jpg";

export default function About() {
  return (
    <>
      <section className={styles.about}>
        <div id={styles.slideshow_container}>
          <div id={styles.slideshow}>
            <div id={styles.box1}>
              <Image
                src={picOne}
                alt="slideshow car image"
                width={500}
                height={300}
              />
            </div>
            <div id={styles.box2}>
              <Image
                src={picTwo}
                alt="slideshow car image"
                width={500}
                height={300}
              />
            </div>
            <div id={styles.box3}>
              <Image
                src={picThree}
                alt="slideshow car image"
                width={500}
                height={300}
              />
            </div>
            <div id={styles.box4}>
              <Image
                src={picFour}
                alt="slideshow car image"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className={styles.about__resume}>
          <h2> A nossa história</h2>
          <p>
            Somos uma empresa familiar fundada em 1990 inicialmente vocacionada
            para o tradicional serviço de táxi. <br />
            Actualmente contamos com uma frota de veículos com capacidade para
            4,6 e 8 passageiros tanto para serviço de táxi na cidade de Lisboa
            mas também para turismo privado, transfers e tours.
            <br />
            Dispomos de um serviço de transporte de luxo devidamente higienizado
            sendo a segurança palavra de ordem com manutenções regulares.
            <br />
            Os nossos motoristas dominam vários idiomas e serão os seus melhores
            guias para conhecer as nossas cidades.
          </p>
        </div>
      </section>
    </>
  );
}
