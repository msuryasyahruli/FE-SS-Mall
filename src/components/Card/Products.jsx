import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsStarFill } from 'react-icons/bs'

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

    const [cart] = useState({
        product_id: "",
    })

    // console.log(cart);

    const handleSumbit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_KEY}/cart`, cart)
            .then((res) => {
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <div className='container mx-auto grid grid-cols-6 gap-8 my-4'>
                {products.map((item, index) => (
                    <form key={index} onClick={handleSumbit} >
                        <div className='rounded-2xl shadow-md overflow-hidden col-span-1'>
                            <input type="text" className='hidden' name='product_id' value={item.product_id} />
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
                                    <button type='submit' className='bg-[#40BFFF] rounded-md text-white h-6 w-full text-center'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </form>
                ))}
            </div>
        </>
    )
}

export default Products