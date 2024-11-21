import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const CarCard = (car) => (
  <>
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt={car.title} src={car.image} />}
    >
      <Meta title={car.title} description={car.description} />
    </Card>
  </>
);

export default CarCard;
