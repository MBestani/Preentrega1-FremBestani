import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';
import ItemCart from "../ItemCart";

const Cart = () => 
{
    const {cart, totalPrice, clearCart} = useCartContext();

    const order = {
        buyer:{
        name: 'Marum',
        email: 'jfrembestani@gmail.com',
        phone:3543465654,
        address: 'Mi casa'
    },
      items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
      total:totalPrice (),
    }

    const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection (db, 'orders');
    addDoc(ordersCollection, order)
    }

    if (cart.length === 0) {
        return (
            <>
            <p>No hay elementos en el carrito</p>
            <Link to='/'>Hacer Compras</Link>
            </>
        );
    }
    
    return(
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} /> )
        }
        <p>
            total: ${totalPrice()}
        </p>
        <button onClick={handleClick}>Emitir Compra</button>
        <button onClick={clearCart}>Vaciar Carrito</button>
        </>
    
    )
}

export default Cart