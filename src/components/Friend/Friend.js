import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {id, name, phone, website, address} = props.friend;
    const history = useHistory();

    const handleFriendClick = () => {
        history.push(`friend/${id}`);
    }

    const friendStyle = {
        border: '2px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div style = {friendStyle}>
            <h2>I am : {name} {id}</h2>
            <h5>Call Me : {phone}</h5>
            <h5>Visit Me : {website}</h5>
            <p><small>City : {address.city}</small></p>
            <Link to={`/friend/${id}`}>visit me</Link>
            <br />
            <Link to={`/friend/${id}`}>
            <button>Visit Me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit Me Again</button>
        </div>
    );
};

export default Friend;