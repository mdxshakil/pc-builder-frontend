import { addToBuilder } from '@/redux/features/pcbuilder/pcbuilderSlice';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import RatingStars from './RatingStars';

const BuilderItemCard = ({ product }) => {
    const { image, productName, category, price, status, ratings } = product || {};
    const dispatch = useDispatch();
    const router = useRouter();

    const handleAddToBuilder = () => {
        dispatch(addToBuilder(product));
        router.push("/pcbuilder")
    }

    return (
        <div className="w-full max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
            <div className="flex flex-col items-center p-6">
                <Image width={96} height={96} className="w-24 h-24 mb-3 rounded-full object-cover shadow-lg" src={image} alt={productName} />
                <h5 className="mb-1 text-sm md:text-md font-medium text-gray-400">{productName}</h5>
                <div className='flex flex-col md:flex-row items-center justify-around gap-2  md:gap-6 '>
                    <span className="text-xs md:text-sm badge badge-xs badge-info">{category}</span>
                    {status === "In Stock" ? <span className="text-xs md:text-sm badge badge-xs badge-success">{status}</span>
                        : <span className="text-xs md:text-sm badge badge-xs badge-error">{status}</span>}
                </div>
                <span className='mt-2 text-yellow-500 text-xs sm:text-md md:text-lg'>
                    <RatingStars rating={ratings} />
                </span>
                <div className="flex mt-4 items-center justify-around gap-2 md:gap-6">
                    <h2 className='text-md md:text-xl font-bold'>${price}</h2>
                    <button onClick={handleAddToBuilder} className='btn  btn-xs md:btn-sm'>Add</button>
                </div>
            </div>
        </div>
    );
};

export default BuilderItemCard;