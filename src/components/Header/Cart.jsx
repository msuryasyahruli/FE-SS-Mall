import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsTrash3 } from "react-icons/bs";

const Cart = () => {
    const [slideBar, setSlideBar] = useState(true)
    const handleClickCart = () => {
        setSlideBar(!slideBar)
    }

    const [cart, setCart] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/cart`)
            .then((res) => {
                setCart(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <>
            <button onClick={handleClickCart}>
                <img src={require('../../assets/image/cart.png')} alt="cart" />
            </button>
            <div className={!slideBar ? 'w-1/3 h-full fixed top-0 right-0 border-s bg-white' : 'fixed right-[-100%]'}>
                <div className='flex justify-between p-4 border-b'>
                    <p className='text-4xl font-medium'>My Cart</p>
                    <button onClick={handleClickCart} className='h-10 w-10 bg-gray-200 rounded-lg'><h1>X</h1></button>
                </div>
                {cart.map((item, index) => (
                    <div key={index} className='flex'>
                        <div className='h-36 aspect-square'>
                            <img src={item.product_image} alt="products" className='h-full' />
                        </div>
                        <div className='w-full flex flex-col justify-between border'>
                            <div className='px-2 flex justify-between items-center'>
                                <p className='text-xl font-medium'>{item.product_name}</p>
                                <button><BsTrash3 /></button>
                            </div>
                            <p className='text-2xl p-2 font-medium'>{item.product_price}</p>
                            <button className='bg-[#EC6D62] text-white h-9 w-full text-center'>Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cart