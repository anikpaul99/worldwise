import { useSearchParams } from "react-router-dom";

/**
 * @returns {number []} array containing the latitude and longitude from url
 * @author Anik Paul
 */
export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");
  const lat = searchParams.get("lat");
  let lng = searchParams.get("lng");

  // to avoid the error "invalid coordinates. expecting latitude in (+/- 90) and longitude in (+/- 180) range values"
  while (lng < -180) {
    lng += 360;
  }
  while (lng > 180) {
    lng -= 360;
  }

  return [lat, lng];
}
