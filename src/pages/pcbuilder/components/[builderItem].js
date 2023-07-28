import RootLayout from '@/components/layout/RootLayout';
import BuilderItemCard from '@/components/ui/BuilderItemCard';
import React from 'react';

const BuilderItemsPage = ({ products }) => {
    return (
        <div className='max-w-7xl mx-auto p-6'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 place-items-center '>
                {
                    products?.map(product => <BuilderItemCard key={product?._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default BuilderItemsPage;

BuilderItemsPage.getLayout = function getLayout(page) {
    return <RootLayout>
        {page}
    </RootLayout>
}

export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`${process.env.SERVER_BASE_URL}/category?name=${params?.builderItem}`)
    const data = await res.json();
    return {
        props: {
            products: data.data
        }
    }
}