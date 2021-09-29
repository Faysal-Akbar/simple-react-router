import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const history = useHistory();

    const handleClick = () => {
        history.push('/friends');
    }

    const [friend, setFriend] = useState({})
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [friendId])
    return (
        <div>
            <h2>Friend Details {friendId} comming soon...</h2>
            <h1>{friend.name}</h1>
            <h4>{friend.phone}</h4>
            <h5>{friend.website}</h5>
            <h5>{friend.company?.name}</h5>
            <button onClick={handleClick}>Back to all</button>
        </div>
    );
};

export default FriendDetail;