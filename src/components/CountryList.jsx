import styles from "./CountryList.module.css";

import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

/**
 * Component containing list of visited countries
 * @prop {Object []} cities cities data
 * @prop {Boolean} isLoading loading status
 * @returns {JSX.Element}
 * @author Anik Paul
 */
function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    console.log(arr);
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
