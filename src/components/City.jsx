import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCities } from "../contexts/CitiesContext";
import styles from "./City.module.css";

import Spinner from "./Spinner";
import BackButton from "./BackButton";

/**
 * WIll formate the date from "2027-10-31T15:59:59.138Z" to "Sunday, October 31, 2027"
 * @param {string} date datec recieved from fetched data
 * @returns {string} date to be shown in the UI
 * @author Anik Paul
 */
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

/**
 * City component including city data when clicked on one of the city item. (e.g. /app/cities/73930385?lat=88&lng=99)
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function City() {
  const { id } = useParams();
  const { currentCity, getCity, isLoading } = useCities();

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
