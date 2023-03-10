import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Chat = () => {

    const [chats, setChats] = useState([]);
    const fetchChats = async () => {
        const { data } = await axios.get('http://localhost:5000/chats')
        setChats(data);
    }

    useEffect(() => {
        fetchChats()
    }, [])

    return (
        <div className='pt-32'>
            {chats?.map(chat => <div key={chat._id}>
                {chat.chatName}
            </div>)}
        </div>
    );
};

export default Chat;