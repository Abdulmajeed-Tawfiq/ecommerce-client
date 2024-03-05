import { Link } from "react-router-dom";
import styles from "./Card.module.css";

interface Item {
  id: number;
  attributes: {
    img: { data: { attributes: { url: string } } };
    img2: { data: { attributes: { url: string } } };
    title: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
  };
}

function Card({ item }: { item: Item }) {
  return (
    <Link className={styles.link} to={`/product/${item.id}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          {item.attributes.isNew && <span>New Season</span>}
          <img
            src={
              import.meta.env.VITE_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className={styles.mainImg}
          />
        </div>
        <div className={styles.text}>
          <h3>{item.attributes.title}</h3>
          <h2>${item.attributes.price}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Card;
