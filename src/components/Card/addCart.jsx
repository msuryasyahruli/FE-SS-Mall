import axios from 'axios';
import React, { useState } from 'react'

const AddCart = ({ product_id, children }) => {
    const [cart] = useState({
        product_id: product_id,
    })

    const handleSumbit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_KEY}/cart`, cart)
            .then((res) => {
                alert('Product added to cart')
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <form onClick={handleSumbit} >
                {children}
            </form>
        </>
    )
}

export default AddCart