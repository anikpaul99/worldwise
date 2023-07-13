import styles from "./CountryItem.module.css";

/**
 * Each Country component from the visited countries
 * @prop {Object} country each visited country information
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
