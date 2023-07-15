import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";

/**
 * WIll formate the date from "2027-10-31T15:59:59.138Z" to "October 31, 2027"
 * @param {string} date datec recieved from fetched data
 * @returns {string} date to be shown in the UI
 * @author Anik Paul
 */
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

/**
 * Each city component from total cities data (e.g. /app/cities)
 * @prop {Object} city Data about each city
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function CityItem({ city }) {
  const { currentCity } = useCities();

  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
