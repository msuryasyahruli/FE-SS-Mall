import React from 'react'
import Dropdown from './Dropdown'
import History from './History'
import CartDrawer from './CartDrawer'

const Navbar = () => {
    return (
        <>
            <div className='h-20 bg-[#40BFFF] sticky'>
                <div className='container mx-auto h-full flex items-center '>
                    <div className='flex text-white text-2xl grow'>
                        <img src={require('../../assets/image/Logo.png')} alt="logo" />
                    </div>
                    <div>
                        <ul className='flex text-white gap-12'>
                            <li className='cursor-pointer'>Home</li>
                            <li><Dropdown /></li>
                            <li className='cursor-pointer'>About</li>
                            <li className='cursor-pointer'>Pricing</li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-6 ms-24'>
                        <div>
                            <img src={require('../../assets/image/search.png')} alt="search" />
                        </div>
                        <div>
                            <CartDrawer />
                        </div>
                        <div>
                            <History />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar