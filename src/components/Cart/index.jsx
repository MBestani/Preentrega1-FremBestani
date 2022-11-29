import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';
import ItemCart from "../ItemCart";
import { useState } from "react";

const Cart = () => {
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '',
        address:'', 
    });
    const { cart, totalPrice, clearCart } = useCartContext();

    const order = {
        
        buyer: {
            name: dataForm.name,
            email: dataForm.email,
            phone: dataForm.phone,
            address: dataForm.address,
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const emitirCompra = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'order');
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

   const handleInputChange = (e) => {
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })
   }

    return (
        <div>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                total: ${totalPrice()}
            </p>
            <form onSubmit={emitirCompra}>
                <input 
                type="text" 
                name= "name"
                placeholder="Nombre"
                onChange={handleInputChange}
                value={dataForm.name}
                />
                <input 
                type="text" 
                name= "phone"
                placeholder="Telefono"
                value={dataForm.phone}
                onChange={handleInputChange}
                />
                <input 
                type="text" 
                name= "email"
                placeholder="Email"
                value={dataForm.email}
                onChange={handleInputChange}
                />
                                <input 
                type="text" 
                placeholder="Direccion"
                name="address"
                value={dataForm.adress}
                onChange={handleInputChange}
                />
                <button type="submit">Emitir Compra</button>
            </form>

            <button onClick={clearCart}>Vaciar Carrito</button>
      </div>

    )
}

export default Cart