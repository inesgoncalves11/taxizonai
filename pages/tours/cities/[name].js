import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/router";
import styles from "./cities.module.css";
import Image from "next/image";
import Link from "next/link";
import { CITIES_DATA } from "../../../mocks/cities";
import { useState } from "react";
import Banner from "../../../components/banner/banner";
import { SLIDESHOW } from "../../../mocks/slideshow";

const City = () => {
  const router = useRouter();
  const { name } = router.query;
  const [tour, setTour] = useState(CITIES_DATA);
  const [slideshow, setSlideshow] = useState(SLIDESHOW);
  const selectedCity = CITIES_DATA.find((element) => element.name === name);
  const selectedSlideshow = SLIDESHOW.find((item) => item.name === name);
  if (!selectedCity) {
    return <p> Informação não disponivel</p>;
  }
  return (
    <>
      <Banner title="Tours" />
      <div className={styles.container__tour}>
        <h2 className={styles.tour__title}>{selectedCity.title} </h2>
        <p className={styles.tour__description}>{selectedCity.subtitle}</p>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
          navigation={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div>
              <Image
                src={selectedSlideshow.url1}
                alt="lisbon"
                width="800px"
                height="380px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src={selectedSlideshow.url2}
                alt="lisbon"
                width="800px"
                height="380px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src={selectedSlideshow.url3}
                alt="lisbon"
                width="800px"
                height="380px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src={selectedSlideshow.url4}
                alt="lisbon"
                width="800px"
                height="380px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src={selectedSlideshow.url5}
                alt="lisbon"
                width="800px"
                height="380px"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={styles.container__description} key={selectedCity.name}>
          <div className={styles.tour__info}>
            <h4>Informações e Condições gerais:</h4>

            <div className={styles.info__conditions}>
              <div className={styles.info__icons}>
                <div>
                  <span className="material-symbols-outlined">wifi</span>
                  <p> Internet grátis</p>
                </div>
                <div>
                  <span className="material-symbols-outlined">local_drink</span>
                  <p> Oferta de águas </p>
                </div>
                <div>
                  <span className="material-symbols-outlined">schedule</span>
                  <p> {selectedCity.time} </p>
                </div>
              </div>
              <p>
                <br />
                Todas as nossas tours requerem uma reserva prévia.
                <br />
                As tours têm um limite de 8 passageiros por viatura.
                <br />
                Os itenários podem estar sujeitos a alterações de acordo com as
                suas preferências, sendo as mesmas préviamente acordadas na
                reserva.
                <br />
                <br />
                <strong>As nossas tours não incluem:</strong>
                <br />
                Refeições, entradas em museus/monumentos ou outro tipo de locais
                turísticos e o alojamento.
              </p>
            </div>
            <div className={styles.container__button}>
              <button className={styles.tour__book}>
                <Link href="/contacts/">Reservar</Link>
              </button>
            </div>
          </div>
          <div className={styles.description__details}>
            <h3 className={styles.description__name}> Rota</h3>
            <h4 className={styles.tour__day}>{selectedCity.route}</h4>
            {!selectedCity.info && <p>{selectedCity.description}</p>}

            {selectedCity.info &&
              selectedCity.info.map((item) => (
                <>
                  <h4>{item.day}</h4>
                  <p>{item.description}</p>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default City;
