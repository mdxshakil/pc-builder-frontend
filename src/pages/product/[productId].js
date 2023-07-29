import RootLayout from '@/components/layout/RootLayout';
import ChatBubble from '@/components/ui/ChatBubble';
import RatingStars from '@/components/ui/RatingStars';
import { capitalizeFirstLetter } from '@/utils';
import Head from 'next/head';
import Image from 'next/image';

const ProductDetailsPage = ({ productDetails }) => {
    const { image, productName, category, status, price, description, keyFeatures, individualRating, averageRating, reviews } = productDetails || {};
    return (
        <>
            <div className='p-6 max-w-7xl mx-auto'>
                <Head>
                    <title>PC Empire - {productName}</title>
                    <meta name="Components Page" description="PC Empire pc components page" />
                </Head>
                <div className="card shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-2">
                    <figure><Image height={384} width={0} sizes='100vw' src={image} alt={productName} className='w-full h-96 object-cover hover:scale-150 transition-all duration-500' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{productName}</h2>
                        <div className='flex flex-col'>
                            <span>{description}</span>
                            <div className='flex items-center justifu-start gap-4 py-2'>
                                <span className='badge badge-info text-xs sm:text-md'>{category}</span>
                                {status === "In Stock" ?
                                    <span className='badge badge-success text-xs sm:text-md'>{status}</span> :
                                    <span className='badge badge-error text-xs sm:text-md'>{status}</span>}
                            </div>
                            <div>
                                <span>{`Ratings: (avg | user)`}</span>
                                <div className='flex items-center justify-start gap-2 sm:gap-4'>
                                    <span className='flex gap-1 text-yellow-500'>                                      <RatingStars rating={averageRating} />
                                        {`(${averageRating})`}
                                    </span>
                                    |
                                    <span className='flex gap-1 text-green-500'>
                                        <RatingStars rating={individualRating} />
                                        {`(${individualRating})`}
                                    </span>
                                </div>
                            </div>
                            {/* Display keyFeatures */}
                            <div>
                                <span className='badge badge-warning'>Key Features:</span>
                                <ul>
                                    {Object.entries(keyFeatures)?.map(([key, value], index) => (
                                        <li key={index}>
                                            <span>{capitalizeFirstLetter(key)}: {value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
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
        </>
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