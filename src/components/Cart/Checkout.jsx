import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MoveToHistory from './MoveToHistory';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius: 1
};

const Checkout = ({ image, name, price, product_id, cart_id }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [payment, setPayment] = React.useState(false)
    const handleConfirmPayment = () => setTimeout(() => {
        setPayment(true);
    }, 1000);

    const idCart = cart_id;
    const handleClosePayment = () => {
        setOpen(false);
        setPayment(false);
        axios
            .delete(
                `${process.env.REACT_APP_API_KEY}/cart/${idCart}`,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((res) => {
                alert('Payment Success')
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    } 

    return (
        <div>
            <button className='bg-[#EC6D62] text-white h-9 w-full text-center' onClick={handleOpen}>Checkout</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='text-center flex flex-col justify-center items-center h-full'>
                        <p className=' text-4xl font-bold my-4'>Confirm Payment</p>
                        {!payment ? <div>
                            <img src={image} alt="products" className='mx-auto' />
                            <p className='text-2xl font-semibold'>{name}</p>
                            <p className='text-4xl font-bold'>${price}</p>
                            <MoveToHistory id={product_id}>
                                <button className='bg-blue-400 text-white w-60 h-10 rounded-md my-4 hover:bg-blue-500' onClick={handleConfirmPayment}>Confirm</button>
                            </MoveToHistory>
                        </div>
                            :
                            <div>
                                <img src={require('../../assets/image/payment.png')} alt="payment success" className='mx-auto' />
                                <p className='font-normal text-yellow-400 text-xl'>Payment Success</p>
                                <button className='bg-blue-400 text-white w-60 h-10 rounded-md my-4 hover:bg-blue-500' onClick={handleClosePayment}>Close</button>
                            </div>
                        }
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default Checkout