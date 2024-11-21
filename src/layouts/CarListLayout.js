import { Outlet } from "react-router-dom";

const CarListLayout = () => {
  return (
    <div className="carlist-layout">
      <h2>Explore Our Car Inventory</h2>
      <p>Welcome to our extensive collection of cars! Immerse yourself in the world of automobiles, where the thrill of the road knows no bounds. Our carefully curated inventory covers a spectrum of styles, from sleek sports cars to reliable family vehicles and rugged off-road machines. Each car has its own unique story, designed to transport drivers to exciting destinations and memorable journeys. Whether you're a seasoned car enthusiast or a newcomer ready to hit the road, our diverse catalog offers something for every driver. Explore our inventory and embark on an unforgettable journey through the features of these finely crafted automotive tales.</p>

      <Outlet />
    </div>
  );
}

export default CarListLayout;
