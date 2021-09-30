import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({})
    console.log(friend)
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h2>comming soon friend details : {friendId}</h2>
            <h3>Name : {friend.name}</h3>
            <p>Email : {friend.email}</p>
            <p>Phone : {friend.phone}</p>
            <p>Company Name : {friend.company?.name}</p>
        </div>
    );
};

export default FriendDetail;