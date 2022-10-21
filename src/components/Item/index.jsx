import "./item.css";

import { Link } from "react-router-dom"
import React from "react";

const Item = ({ id, info }) => {
    return (
        <Link to={`/detalle/${id}`} className="funko">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </Link>
    );
}

export default Item;