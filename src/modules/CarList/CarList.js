import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Button, Col, Row } from "antd";
import CarCard from "../../components/CarCard/CarCard";
import { ShoppingCardContext } from "../../context/ShoppingCardContext";

const colStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const addToCartButtonStyle = {
  backgroundColor: 'green',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '8px 16px',
};
const CarList = () => {
  const carListData = useLoaderData();
  const { setStateValue } = useContext(ShoppingCardContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(carListData);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Filter carListData based on the searchQuery
    const filteredResults = carListData.filter((car) =>
      car.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const handleOnAddToCartClick = (car) => {
    setStateValue((prevItems) => [...prevItems, car]);
  };

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const carColumns = chunkArray(filteredData, 3);

  return (
    <div className="carlist">
      <form id="carSearchForm" onSubmit={handleFormSubmit}>
        <label htmlFor="searchQuery">Search Cars:</label>
        <input
          type="text"
          id="searchQuery"
          name="searchQuery"
          placeholder="Enter car name..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {carColumns.map((column, columnIndex) => (
        <Row gutter={[16, 16]} key={columnIndex}>
          {column.map((car) => (
            <Col key={car.id} span={8} style={colStyle}>
              <Link to={car.id.toString()} style={{ flexGrow: 1 }}>
                <CarCard
                  title={car.title}
                  description={car.description}
                  image={car.image}
                  price={car.price}
                />
              </Link>
              <Row>
                <Col span={8}>
                  <p>Price: {car.price}</p>
                </Col>
                <Col span={8} offset={0}>
                  <Button onClick={() => handleOnAddToCartClick(car)} style={{ ...addToCartButtonStyle, alignSelf: 'flex-start' }}>
                    Add To Cart
                  </Button>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
  
};
export default CarList; 

