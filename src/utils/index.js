export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};


export const calculateAverageRating = (ratings) => {
    if (!Array.isArray(ratings) || ratings.length === 0) {
        return 1;
    }

    const totalRating = ratings.reduce((acc, rating) => acc + rating, 0);
    const averageRating = totalRating / ratings?.length;
    return Number(averageRating.toFixed(1));
};
