import CarCard from "../../components/CarCard/CarCard";
import { useLoaderData, useParams } from 'react-router-dom';

export default function CarDetails() {
  const { id } = useParams();
  const car = useLoaderData();

  return (
    <div className="car-details" key={id}>
      <h2>Details for {car.title}</h2>
      <CarCard
        title={car.title}
        description={car.description}
        image={car.image}
      />
      <p>Price: {car.price}</p>
      <div className="details">
        <p>Description: {car.description}</p>
      </div>
    </div>
  );
}
