import axios from 'axios';
import React, { useEffect } from 'react';

const Chat = () => {

    const fetchchats = async () => {
        const data = await axios.get('http://localhost:5000/chats')
        console.log(data);
    }

    useEffect(() => {
        fetchchats()
    }, [])

    return (
        <div>
            chats
        </div>
    );
};

export default Chat;