import styles from "./banner.module.css";
import Image from "next/future/image";
import bannerImage from "../../public/img/banner.jpg";

export default function Banner(props) {
  return (
    <>
      <div className={styles.banner}>
        <Image src={bannerImage} priority="true" alt="taxi banner" />
        <h2 className={styles.banner__title}>{props.title}</h2>
      </div>
    </>
  );
}
