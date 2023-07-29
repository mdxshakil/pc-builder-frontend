import RootLayout from '@/components/layout/RootLayout';
import BuilderItemCard from '@/components/ui/BuilderItemCard';
import Spinner from '@/components/ui/Spinner';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const BuilderItemsPage = ({ products }) => {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <Spinner />
    }

    if (status === "unauthenticated") {
        return <div className='min-h-screen flex flex-col items-center justify-center gap-4'>
            <p className='text-xl'>You must login to access this page!</p>
            <Link href={"/login"} className='btn btn-primary btn-sm'>Login</Link>
        </div>
    }

    return (
        <Fade>
            <div className='max-w-7xl mx-auto p-6'>
                <Head>
                    <title>PC Empire - Components</title>
                    <meta name="Pc components Page" description="PC Empire pc components" />
                </Head>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 place-items-center '>
                    {
                        products?.map(product => <BuilderItemCard key={product?._id} product={product} />)
                    }
                </div>
            </div>
        </Fade>
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