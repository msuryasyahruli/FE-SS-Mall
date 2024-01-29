import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BsFilterRight, BsX } from 'react-icons/bs';
import Dropdown from './Dropdown';
import CartDrawer from '../Cart/CartDrawer';
import History from './History';

export default function Burger() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button onClick={handleOpen}><BsFilterRight className='text-5xl text-white' /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className=' bg-[#40BFFF]'>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='flex items-center p-2'>
                        <History />
                        <div className='w-full rounded-full items-center flex p-1 bg-gray-500'>
                            <img src={require('../../assets/image/search.png')} alt="search" />
                            <input type="text" placeholder='Search' className='bg-transparent w-full' />
                        </div>
                        <CartDrawer />
                        <button onClick={handleClose} className='text-5xl font-bold text-white'><BsX /></button>
                    </Typography>
                    <Typography id="modal-modal-description">
                        <div className='p-4 grid text-xl text-white'>
                            <div className='cursor-pointer'>Home</div>
                            <div><Dropdown /></div>
                            <div className='cursor-pointer'>About</div>
                            <div className='cursor-pointer'>Pricing</div>
                        </div>
                    </Typography>
                </div>
            </Modal>
        </div>
    );
}
