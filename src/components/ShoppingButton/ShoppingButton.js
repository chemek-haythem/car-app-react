import React from "react";
import { Button } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";

const ShoppingButton = ({itemNum}) => {
    return (
        <>
            <Button
                shape="circle"
                icon={<ShoppingOutlined />}
                style={{ backgroundColor: 'grey', borderColor: 'grey', color: 'white' }}
            >
                {itemNum.length !== 0 && (
                <div
                    style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '-10px',
                    backgroundColor: 'red',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: '12px',
                    }}
                >
                    {itemNum.length}
                </div>
                )}
            </Button>
        </>
    )
}

export default ShoppingButton;