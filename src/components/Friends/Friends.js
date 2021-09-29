import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {
    const [friends, setfriends] = useState([]);

    useEffect( ()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setfriends(data))
    }, [])
    return (
        <div>
            <h1>I have {friends.length} Friends</h1>
            <div className = "friend-container">
            {
                friends.map(friend => <Friend
                    key = {friend.id}
                    friend = {friend}
                ></Friend>)
            }
            </div>
        </div>
    );
};

export default Friends;