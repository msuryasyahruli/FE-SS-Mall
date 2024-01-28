import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { BsTrash3 } from 'react-icons/bs';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius: 2
};

const Delete = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/product`)
            .then((res) => {
                setProducts(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleDelete = (product_id) => {
        axios
            .delete(
                `${process.env.REACT_APP_API_KEY}/product/${product_id}`,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((res) => {
                alert("Product deleted");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    };

    return (
        <div>
            <button onClick={handleOpen}>My products</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center'>
                        My products
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {products.map((item, index) => (
                            <div key={index} className='flex justify-between border-b py-2'>
                                <div>
                                    {item.product_name}{" "}
                                    ${item.product_price}
                                </div>
                                <div>
                                    <button onClick={() => handleDelete(item.product_id)}><BsTrash3 /></button>
                                </div>
                            </div>
                        ))}
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Delete