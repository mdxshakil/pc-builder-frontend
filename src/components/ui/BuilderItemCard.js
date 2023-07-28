import { addToBuilder } from '@/redux/features/pcbuilder/pcbuilderSlice';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';

const BuilderItemCard = ({ product }) => {
    const { image, productName, category, price, status, averageRating } = product || {};
    const dispatch = useDispatch();
    const router = useRouter();

    const handleAddToBuilder = () => {
        dispatch(addToBuilder(product));
        router.push("/pcbuilder")
    }

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
                    <button onClick={handleAddToBuilder} className='btn btn-sm'>Add</button>
                </div>
            </div>
        </div>
    );
};

export default BuilderItemCard;