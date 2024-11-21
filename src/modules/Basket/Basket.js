import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Button } from 'antd';
import { ShoppingCardContext } from "../../context/ShoppingCardContext";
import BasketItem from "../../components/BasketItem/BasketItem";

const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

const addToCartButtonStyle = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '90px',
    padding: '8px 16px',
};

const Basket = () => {
    const [totalToPay, setTotalToPay] = useState(0);
    const { stateValue } = useContext(ShoppingCardContext);
    const { setStateValue } = useContext(ShoppingCardContext);

    const handleOnRemoveClick = (carToRemove) => {
        const indexToRemove = stateValue.findIndex(car => car.id === carToRemove.id);  
        if (indexToRemove !== -1) {
          const updatedState = [...stateValue];
          updatedState.splice(indexToRemove, 1);
          setStateValue(updatedState); 
        }
    };

    useEffect(() =>{
        let total = 0;
        stateValue.map((car) => (
            total = total + car.price
        ));
        setTotalToPay(total);
    }, [stateValue]);

    return (
        <div>
            <h1>Your Current Basket</h1>
            <section>
                <a href="CarList">Explore Car List</a>
            </section>
            <div className="carlist">
                {stateValue.map((car, index) => (
                    <Row gutter={[16, 16]} key={`${car.id}-${index}`}>
                        <Col key={car.id} span={8} style={colStyle}>
                            <BasketItem
                                title={car.title}
                                description={car.description}
                                image={car.image}
                                price={car.price}
                            />
                            <Row>
                                <Col span={8}>
                                    <p>Price: {car.price}</p>
                                </Col>
                                <Col span={8} offset={0}>
                                    <Button onClick={() => handleOnRemoveClick(car)} style={{ ...addToCartButtonStyle, alignSelf: 'flex-start' }}>
                                        Remove
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                ))}
            </div>
            <section>
                <h1 href="CarList">CheckOut :</h1>
                <Row> 
                    <Col span={8}>
                        <h2>Total to pay: {totalToPay}</h2>
                    </Col>
                </Row>
            </section>
        </div>
    );
};

export default Basket;
