import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website } = props.friend;
    const history = useHistory();
    const style = {
        border: '2px solid gold',
        padding: '20px',
        borderRadius: '8px'
    }
    // const url = `/friend/${id}`
    const handleClickFriend = () => {
        history.push(`/friend/${id}`)
    }
    return (
        <div style={style}>
            <h2>Name : {name}</h2>
            <p>Phone : {phone}</p>
            <p>Website : {website}</p>

            <Link to={`/friend/${id}`}>Vsiti me</Link>
            <br />
            <Link to={`/friend/${id}`}>
                <button>visit me 2</button>
            </Link>

            <button onClick={handleClickFriend}>visit me 3</button>
        </div>
    );
};

export default Friend;