import React from 'react'
import Dropdown from './Dropdown'
import Cart from './Cart'

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
                            <li>Home</li>
                            {/* <li>Products</li> */}
                            <li><Dropdown /></li>
                            <li>About</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-6 ms-24'>
                        <div>
                            <img src={require('../../assets/image/search.png')} alt="search" />
                        </div>
                        <Cart/>
                        <div>
                            <img src={require('../../assets/image/profile.png')} alt="profile" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar