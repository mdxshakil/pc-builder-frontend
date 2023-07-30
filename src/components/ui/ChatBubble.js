import Image from 'next/image';

const ChatBubble = ({ review }) => {
    return (
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <Image height={40} width={40} src={`https://api.multiavatar.com/${review?.slice(0, 12)}.png`} alt='avatar'/>
                </div>
            </div>
            <div className="chat-bubble text-sm">{review}</div>
        </div>
    );
};

export default ChatBubble;