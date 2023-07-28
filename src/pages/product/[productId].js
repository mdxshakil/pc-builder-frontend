import RootLayout from '@/components/layout/RootLayout';
import ChatBubble from '@/components/ui/ChatBubble';
import { capitalizeFirstLetter } from '@/utils';
import React from 'react';

const ProductDetailsPage = ({ productDetails }) => {
    const { _id, image, productName, category, status, price, description, keyFeatures, individualRating, averageRating, reviews } = productDetails || {};
    return (
        <div className='p-6 max-w-7xl mx-auto'>
            <div className="card shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-2">
                <figure><img src={image} alt="Album" className='w-full h-96 object-cover hover:scale-150 transition-all duration-500' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p className='flex flex-col'>
                        <span>{description}</span>
                        <div className='flex items-center justifu-start gap-4 py-2'>
                            <span className='badge badge-info'>Category: {category}</span>
                            {status === "In Stock" ?
                                <span className='badge badge-success'>{status}</span> :
                                <span className='badge badge-error'>{status}</span>}
                        </div>
                        <div>
                            <span>Ratings:</span>
                            <div className='flex items-center justifu-start gap-4'>
                                <span className=" font-semibold  dark:text-yellow-500">{averageRating} out of 5 (avg)</span> |
                                <span className=" font-semibold  dark:text-yellow-500">{individualRating} out of 5 (individual)</span>

                            </div>
                        </div>
                        {/* Display keyFeatures */}
                        <div>
                            <span className='badge badge-warning'>Key Features:</span>
                            <ul>
                                {Object.entries(keyFeatures).map(([key, value], index) => (
                                    <li key={index}>
                                        <span>{capitalizeFirstLetter(key)}: {value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </p>
                    <div className="card-actions justify-start">
                        <h2 className='text-2xl font-bold'>${price}</h2>
                    </div>
                </div>
            </div>
            {/* reviews */}
            <div className='my-6'>
                <h2 className='py-2'>What our customers say:</h2>
                {
                    reviews?.map((review, index) => <ChatBubble key={index} review={review} />)
                }
            </div>
        </div >
    );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>
        {page}
    </RootLayout>
}

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.SERVER_BASE_URL}/products`);
    const data = await res.json();
    const paths = data?.data?.map(product => {
        return {
            params: {
                productId: product?._id
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`${process.env.SERVER_BASE_URL}/products/${params?.productId}`);
    const data = await res.json();
    return {
        props: {
            productDetails: data?.data
        }
    }
}