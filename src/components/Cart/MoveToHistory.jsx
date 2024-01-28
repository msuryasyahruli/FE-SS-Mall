import axios from 'axios';
import React from 'react'

const MoveToHistory = ({id, children}) => {
    const [history] = React.useState({
        product_id: id,
    })

    const handleSumbit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_KEY}/history`, history)
            .then((res) => {
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <form onClick={handleSumbit} >
                {children}
            </form>
        </>
    )
}

export default MoveToHistory