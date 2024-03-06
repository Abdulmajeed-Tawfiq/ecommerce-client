/* eslint-disable @typescript-eslint/no-unused-vars */
import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import styles from "./List.module.css";

/* follow this link to know how tu use [filters] on strapi
https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication#filtering */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function List({ catId, subCats, sort }: { catId: any; subCats: any; sort: any }) {
  const { data, loading } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item: object) => `&[filters][sub_categories][id][$eq]=${item}`
    )}`
  );

  return (
    <div className={styles.list}>
      {loading ? "loading..." : data?.map((item) => <Card item={item} />)}
    </div>
  );
}

export default List;
