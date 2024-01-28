import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import axios from 'axios';

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

const Create = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [addPost, setAddPost] = React.useState({
        product_name: "",
        product_price: "",
    })

    const handleChange = (e) => {
        setAddPost({
            ...addPost,
            [e.target.name]: e.target.value,
        });
    };

    const [photo, setPhoto] = React.useState(null);
    const handleUpload = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("product_name", addPost.product_name);
        formData.append("product_price", addPost.product_price);
        formData.append("product_image", photo);
        axios
            .post(`${process.env.REACT_APP_API_KEY}/product`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                alert('Success')
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                alert(err.message);
            });
    };

    return (
        <div>
            <div>
                <button onClick={handleOpen}>Add product</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <form onSubmit={handleSubmit}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center'>
                                Add Product
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Image
                                <input type="file" className='mb-3 cursor-pointer w-full border' name='photo' onChange={handleUpload} />
                                Name
                                <input type="text" className='w-full border h-8 px-2 mb-3' name='product_name' value={addPost.product_name} onChange={handleChange} />
                                Price
                                <input type="text" className='w-full border h-8 px-2' name='product_price' value={addPost.product_price} onChange={handleChange} />
                            </Typography>
                            <Typography>
                                {addPost.product_name === "" || addPost.product_price === "" || photo === null ? <Button sx={{ mt: 2 }} disabled>Create</Button> : <Button type='submit' sx={{ mt: 2 }} >Create</Button>}
                            </Typography>
                        </form>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default Create