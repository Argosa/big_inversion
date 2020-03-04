import React from 'react';
const PersonCard = props => {
    return (
        <div>
            <h1>{props.firstName} {props.lastName}</h1>
            <p><b>Age:</b> {props.age}</p>
            <p><b>Hair Color:</b> {props.hairColor}</p>
        </div>
    );
}

export default PersonCard;
