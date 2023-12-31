import { useNavigate } from "react-router-dom";
import { useState } from "react";

let responseObject;

export function FindFriend() {
    const [toCompare, setToCompare] = useState(false);
    const navigate = useNavigate();

    function handleClick() {
        let friendUserId = document.getElementById('textbox').value;
        const url = `http://localhost:4000/findFriend?userId=${localStorage.getItem('userID')}&friendUserId=${encodeURIComponent(friendUserId)}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('HTTP status ' + response.status);
                }
                return response.json();
            })
            .then((response) => {
                responseObject = response;
                console.log(responseObject);
                setToCompare(true);
            })
            .catch((error) => {
                console.error(`${error}`);
            });
    }

    if (toCompare) {
        navigate('/compare');
    } else {
        return (
            <div id="findFriendContainer">
                <h1 id='test'>Your User ID: {localStorage.getItem('userID')}</h1>
                <p>Input your friend's user ID here:</p>
                <input id='textbox' type="text"></input>
                <button onClick={handleClick}>Click to compare</button>
            </div>
        )
    }
}

export function getResponseObject() {
    return responseObject;
}