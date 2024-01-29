import React from 'react'
import Dropdown from './Dropdown'
import History from './History'
import CartDrawer from '../Cart/CartDrawer'
import Burger from './Burger'

const Navbar = () => {
    return (
        <>
            <div className='h-20 bg-[#40BFFF] sticky top-0 shadow-md z-10'>
                <div className='container mx-auto h-full flex items-center px-2 lg:hidden'>
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
                <div className='container mx-auto h-full flex items-center justify-between px-4 minlg:hidden'>
                    <div className='text-white text-2xl px-2'>
                        <img src={require('../../assets/image/Logo.png')} alt="logo" />
                    </div>
                    <div className='flex items-center ms-24 gap-2'>
                        <Burger />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar