import React from 'react';

const ChatBubble = ({ review }) => {
    return (
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={`https://api.multiavatar.com/${review.slice(0, 12)}.png`} />
                </div>
            </div>
            <div className="chat-bubble text-sm">{review}</div>
        </div>
    );
};

export default ChatBubble;