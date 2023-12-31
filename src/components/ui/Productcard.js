import Image from 'next/image';
import Link from 'next/link';
import RatingStars from './RatingStars';
import { calculateAverageRating } from '@/utils';
import RatingSubmission from './RatingSubmission';
import { useSession } from 'next-auth/react';

const Productcard = ({ product, user }) => {
    const { _id, image, productName, category, price, status, ratings, individualRatings } = product || {};
    const { data: session } = useSession()

    const avgRating = calculateAverageRating(ratings);

    const userRating = individualRatings?.find((userRating) => userRating?.user === user && userRating?.productId === _id)

    return (
        <div className="w-full max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700 hover:scale-105 transition-all">
            <Image height={256} width={0} sizes='100vw' className="p-5 w-full h-64 object-cover" src={image} alt={productName} />
            <div className="px-5 pb-5">
                <span>
                    <h5 className="text-xl font-semibold tracking-tight text-white">{productName}</h5>
                </span>
                <div className="flex items-center justify-between mt-2.5 mb-5">
                    <div className="badge badge-info">{category}</div>
                    {status === "In Stock" ?
                        <div className="badge badge-success">{status}</div> :
                        <div className="badge badge-error">{status}</div>}
                </div>
                <div className="mt-2.5 mb-5 text-yellow-500">
                    <span className='flex gap-1'>
                        <RatingStars rating={avgRating} />{`(${avgRating})`}
                    </span>
                </div>
                {/* if user already submitted a review , or the user is not logged in, dont show review submitting button */}
                {(!userRating && user) && <RatingSubmission productId={_id} user={session?.user?.email} />}
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-white">${price}</span>
                    <Link href={`/product/${_id}`} className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Details</Link>
                </div>
            </div>
        </div>

    );
};

export default Productcard;