import React, { useEffect, useState } from 'react';
import Message from './Message';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'messages'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push({ ...doc.data(), id: doc.id });
      });

      // Sorting messages by date in descending order
      msgs.sort((msg1, msg2) => msg2.msgSentDate.seconds - msg1.msgSentDate.seconds);

      setMessages(msgs);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <div className='flex flex-col m-[2rem]'>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
    </div>
    
  );
};

export default ChatBox;
