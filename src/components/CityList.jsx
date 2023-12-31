import CityItem from './CityItem';
import Spinner from './Spinner';
import Message from './Message';
import { useCitites } from '../contexts/CititesContext';
import styles from './CityList.module.css';

export default function CityList() {
  const { cities, isLoading } = useCitites();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message='Add your first city by clicking on the map' />;

  return (
    <ul className={`${styles.cityList}`}>
      {cities.map(city => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
