import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '0',
    right: '0',
    width: "33%",
    height: "100%",
    bgcolor: 'background.paper',
    boxShadow: 24,
};

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
                    <Box sx={style}>
                        <div className='flex justify-between p-4 border-b items-center'>
                            <p className='text-4xl font-medium'>My History</p>
                        </div>
                        <div className='overflow-auto h-full'>
                            {history.length === 0 ?
                                <div className='justify-center items-center h-full flex text-gray-400 text-xl' >
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
                                            <button className='bg-[#EC6D62] text-white h-9 w-full text-center'>Add to cart</button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default History