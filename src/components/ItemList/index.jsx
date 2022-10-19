import Item from "../Item";
import React from "react";

const ItemList = ({data = []}) => {
    return (
     data.map(funko => <Item key={funko.id} info={funko} />)
    );
}

export default ItemList;