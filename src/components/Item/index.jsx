import "./item.css";

import { Link } from "react-router-dom"
import React, {useContext} from "react";
import { CartContext } from "../../App";

const Item = ({ id , info }) => {
    const  name  = useContext(CartContext);


    return (
        <Link to={`/detail/${id}`} className="funko">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </Link>
    );
}

export default Item;