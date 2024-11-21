import React from 'react';
import { Avatar ,Card } from 'antd';
const { Meta } = Card;


const BasketItem = (manga) => (
  <>
    <Card
      hoverable
      style={{
      width: 800,
      }}
    >
      <Meta
        avatar={<Avatar src={manga.image} />}
        title={manga.title}
        description={manga.description}
      />
    </Card>
  </>
);
export default BasketItem;