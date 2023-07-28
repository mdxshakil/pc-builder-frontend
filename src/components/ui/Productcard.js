import Image from 'next/image';
import Link from 'next/link';

const Productcard = ({ product }) => {
    const { _id, image, productName, category, price, status, averageRating } = product || {};
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
                <div className="mt-2.5 mb-5">
                    <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">{averageRating} out of 5 (stars)</span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-white">${price}</span>
                    <Link href={`/product/${_id}`} className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Details</Link>
                </div>
            </div>
        </div>

    );
};

export default Productcard;