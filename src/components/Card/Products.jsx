import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsStarFill } from 'react-icons/bs'
import AddCart from './addCart'

const Products = () => {
    const [products, setProducts] = useState([])

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
            <div className='container mx-auto grid grid-cols-6 lg:grid-cols-4 sm:grid-cols-2 gap-8 lg:gap-4 sm:gap-2 lg:px-4 sm:px-3 my-4'>
                {products.map((item, index) => (
                    <div key={index} className='rounded-2xl shadow-md overflow-hidden col-span-1'>
                        <div className='aspect-square'>
                            <img src={item.product_image} alt="products" className='w-full' />
                        </div>
                        <div className='p-3 h-44 flex flex-col justify-between'>
                            <div>
                                <p className='text-xl font-medium'>{item.product_name}</p>
                                <div className='flex items-center'><BsStarFill className='text-yellow-300 me-1' /><p>4.5/5</p></div>
                            </div>
                            <div>
                                <p className='text-2xl font-medium'>${item.product_price}</p>
                                <AddCart product_id={item.product_id}>
                                    <button type='submit' className='bg-[#40BFFF] rounded-md text-white h-6 w-full text-center'>Add to cart</button>
                                </AddCart>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products