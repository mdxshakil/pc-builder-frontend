import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`star-${i}`} />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half-star" />);
        }
        return stars;
    };

    return <div className='flex items-center justify-start'>{renderStars()}</div>;
};

export default RatingStars;
