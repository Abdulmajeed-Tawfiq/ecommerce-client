import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import styles from "./List.module.css";

/* follow this link to know how tu use [filters] on strapi
https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication#filtering */

function List({ catId, sort, subCats }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}`
  );

  return (
    <div className={styles.list}>
      {loading
        ? "loading..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
}

export default List;
