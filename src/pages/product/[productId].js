import RootLayout from '@/components/layout/RootLayout';
import React from 'react';

const ProductDetailsPage = ({ productDetails }) => {
    const { _id, image, productName, category, status, price, description, keyFeatures, individualRating, averageRating, reviews } = productDetails || {};
    return (
        <div>
            <h1>{productName}</h1>
        </div>
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