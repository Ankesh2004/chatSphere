import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Message = ({ message }) => {
  const currentTime = useContext(AuthContext);
  const sentTime = new Date(message.msgSentDate);
  const [timeDifference, setTimeDifference] = useState(null);

  useEffect(() => {
    const differenceInMillis = currentTime - sentTime.getTime();
    setTimeDifference(differenceInMillis);
  }, []);

  const formatTimeDifference = () => {
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return 'Just now';
    }
  };

  return (

      <div className="chat chat-start">
        <div className="chat-image avatar ">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={message.photoURL} />
          </div>
        </div>
        <div className="chat-header flex gap-2 items-center">
          {message.displayName}
          <time className="text-xs opacity-50">{formatTimeDifference()}</time>
        </div>
        <div className="chat-bubble">{message.text}</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>

  );
};

export default Message;
