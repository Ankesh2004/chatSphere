import React, { useContext, useEffect, useState } from 'react';
import { db, collection, addDoc } from '../firebase'; // Import the 'collection' method
import { AuthContext } from '../context/AuthContext';

const SendMessage = () => {
  const [value, setValue] = useState("");
  const {currentUser,currentTime}=useContext(AuthContext);
  
  const handleSendMessage = async (event) => {
    event.preventDefault();

    const hour=currentTime.getHours();
    const min=currentTime.getMinutes();

    const msgData = {
      text: value,
      photoURL:currentUser.photoURL, 
      displayName:currentUser.displayName,
      msgSentTime:`${hour}:${min}`,
      msgSentDate:currentTime,
      email:currentUser.email
    };
    console.log(currentUser);

    try {
      await addDoc(collection(db, "messages"), msgData); 
      console.log('Message sent!');
    } catch (e) {
      console.log(e);
    }

    setValue("");
  };

  return (
    <div className='bg-gray-800 fixed bottom-0 w-full shadow-lg py-5'>
      <form onSubmit={handleSendMessage} className='ml-[2rem] w-[90%] flex'>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className='w-full rounded-lg focus:outline-none text-white px-[1rem]'
        />
        <button type='submit' className="btn w-auto text-white">Send</button> 
      </form>
    </div>
  );
};

export default SendMessage;
