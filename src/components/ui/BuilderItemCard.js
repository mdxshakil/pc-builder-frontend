import React from 'react';

const BuilderItemCard = ({ product }) => {
    const { image, productName, category, price, status, averageRating } = product || {};
    return (
        <div className="w-full max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
            <div className="flex flex-col items-center py-6">
                <img className="w-24 h-24 mb-3 rounded-full object-cover shadow-lg" src={image} alt={productName} />
                <h5 className="mb-1 text-md font-medium text-gray-400">{productName}</h5>
                <div className='flex items-center justify-around gap-6'>
                    <span className="text-sm badge badge-info">{category}</span>
                    <span className="text-sm badge badge-warning">{status}</span>
                </div>
                <span className="text-sm badge badge-outline mt-2">{averageRating}(out of 5)</span>
                <div className="flex mt-4 items-center justify-around gap-6">
                    <h2 className='text-xl font-bold'>${price}</h2>
                    <button className='btn btn-sm'>Add</button>
                </div>
            </div>
        </div>
    );
};

export default BuilderItemCard;