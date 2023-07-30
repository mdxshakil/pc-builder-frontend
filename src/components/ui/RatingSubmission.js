import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

function RatingSubmission({ user, productId }) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    useEffect(() => {
        if (rating !== null) {
            // Send the rating submission request only if rating is set (not null)
            fetch(`https://a6-pc-builder-backend.vercel.app/products/${productId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user,
                    rating,
                }),
            })
                .then((res) => res.json())
                .then((data) => { })
                .catch((err) => { });
        }
    }, [rating, productId, user]);

    const handleRatingSubmission = (currentRating) => {
        setRating(currentRating);
    };

    return (
        <span className="flex items-center gap-2">
            <div className="flex">
                {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <label key={index} className="py-2">
                            <input
                                type="radio"
                                name="rating"
                                value={currentRating}
                                onClick={() => handleRatingSubmission(currentRating)}
                                className="hidden"
                            />
                            <FaStar
                                size={20}
                                className="cursor-pointer"
                                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    );
                })}
            </div>
            <p className="text-sm sm:text-xs">(Submit rating)</p>
        </span>
    );
}

export default RatingSubmission;
