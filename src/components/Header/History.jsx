import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { BsX } from 'react-icons/bs';

const History = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [history, setHistory] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/history`)
            .then((res) => {
                setHistory(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div>
                <Button onClick={handleOpen}><img src={require('../../assets/image/profile.png')} alt="profile" /></Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className='h-full w-[500px] sm:w-full overflow-auto right-0 absolute bg-white'>
                        <div className='flex justify-between p-4 border-b items-center bg-white top-0 sticky'>
                            <p className='text-4xl font-medium'>My History</p>
                            <button onClick={handleClose} className='minlg:hidden text-4xl font-bold'><BsX /></button>
                        </div>
                        <div className='bg-slate-200 min-h-full'>
                            {history.length === 0 ?
                                <div className='justify-center items-center flex text-gray-400 text-xl' >
                                    <p>No items</p>
                                </div>
                                :
                                history.map((item, index) => (
                                    <div key={index} className='flex my-1'>
                                        <div className='h-36 aspect-square'>
                                            <img src={item.product_image} alt="products" className='h-full' />
                                        </div>
                                        <div className='w-full flex flex-col justify-between'>
                                            <div className='px-2 flex justify-between items-center'>
                                                <p className='text-xl font-medium'>{item.product_name}</p>
                                            </div>
                                            <p className='text-2xl p-2 font-medium'>${item.product_price}</p>
                                            <button className='bg-[#EC6D62] text-white h-9 w-full text-center'>Buy again</button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default History