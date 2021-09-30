import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    console.log(props.friend)
    const { id, name, phone, website } = props.friend;
    const style = {
        border: '2px solid gold',
        padding: '20px',
        borderRadius: '8px'
    }
    const url = `/friend/${id}`

    return (
        <div style={style}>
            <h2>Name : {name}</h2>
            <p>Phone : {phone}</p>
            <p>Website : {website}</p>

            <Link to={url}>Visit me</Link>
        </div>
    );
};

export default Friend;