import Link from 'next/link';
import React from 'react';

const Productcard = ({ product }) => {
    const { _id, image, productName, category, price, status, averageRating } = product || {};
    return (

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-all">
            <img className="p-5 w-full h-64 object-cover" src={image} alt={productName} />
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
                </a>
                <div className="flex items-center justify-between mt-2.5 mb-5">
                    <div className="badge badge-info">{category}</div>
                    {status === "In Stock" ?
                        <div className="badge badge-success">{status}</div> :
                        <div className="badge badge-error">{status}</div>}
                </div>
                <div className="mt-2.5 mb-5">
                    <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">{averageRating} out of 5 (stars)</span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                    <Link href={`/product/${_id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</Link>
                </div>
            </div>
        </div>

    );
};

export default Productcard;