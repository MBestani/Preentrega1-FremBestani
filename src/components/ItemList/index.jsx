import Item from "../Item";
import React from "react";

const ItemList = ({data}) => {
    console.log("ItemList data:", data)
    return (
     data.map(funko => <Item id={funko.id} info={funko} />)
    );
}

export default ItemList;