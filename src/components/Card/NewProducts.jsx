import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NewProducts = () => {
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
            <div className='container mx-auto grid grid-cols-3 gap-8 my-6'>
                <div className='rounded-2xl shadow-md overflow-hidden col-span-1 flex'>
                    <div className='h-44 aspect-square'>
                        <img src={require('../../assets/image/product1.png')} alt="products" className='h-full' />
                    </div>
                    <div className='p-3 w-full h-full flex flex-col justify-between'>
                        <p className='text-xl font-medium'>Headphone</p>
                        <div>
                            <p className='text-2xl font-medium'>$199</p>
                            <button className='bg-[#40BFFF] rounded-md text-white h-6 w-full text-center'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl shadow-md overflow-hidden col-span-1 flex'>
                    <div className='h-44 aspect-square'>
                        <img src={require('../../assets/image/product1.png')} alt="products" className='h-full' />
                    </div>
                    <div className='p-3 w-full h-full flex flex-col justify-between'>
                        <p className='text-xl font-medium'>Headphone</p>
                        <div>
                            <p className='text-2xl font-medium'>$199</p>
                            <button className='bg-[#40BFFF] rounded-md text-white h-6 w-full text-center'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='rounded-2xl shadow-md overflow-hidden col-span-1 flex'>
                    <div className='h-44 aspect-square'>
                        <img src={require('../../assets/image/product1.png')} alt="products" className='h-full' />
                    </div>
                    <div className='p-3 w-full h-full flex flex-col justify-between'>
                        <p className='text-xl font-medium'>Headphone</p>
                        <div>
                            <p className='text-2xl font-medium'>$199</p>
                            <button className='bg-[#40BFFF] rounded-md text-white h-6 w-full text-center'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewProducts