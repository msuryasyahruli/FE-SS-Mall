import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsStarFill } from 'react-icons/bs'
import AddCart from './addCart'

const NewProducts = () => {
    const [products, setProducts] = useState([])
    const newProducts = products.slice(0, 3)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/product`)
            .then((res) => {
                setProducts(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className='container mx-auto grid grid-cols-3 gap-8 my-8'>
                {newProducts.map((item, index) => (
                    <div key={index} className='rounded-2xl shadow-md overflow-hidden col-span-1 flex'>
                        <div className='h-44 aspect-square'>
                            <img src={item.product_image} alt="products" className='h-full' />
                        </div>
                        <div className='p-3 w-full h-full flex flex-col justify-between'>
                            <div>
                                <p className='text-xl font-medium'>{item.product_name}</p>
                                <div className='flex items-center'><BsStarFill className='text-yellow-300 me-1' /><p>4.5/5</p></div>
                            </div>
                            <div>
                                <p className='text-2xl font-medium'>${item.product_price}</p>
                                <AddCart product_id={item.product_id}>
                                    <button className='bg-[#40BFFF] rounded-md text-white h-6 w-full text-center'>Add to cart</button>
                                </AddCart>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default NewProducts