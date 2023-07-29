import { useRouter } from "next/router";
import RootLayout from "@/components/layout/RootLayout";
import Productcard from "@/components/ui/Productcard";
import Head from "next/head";

const CategoryPage = ({ products }) => {
    const router = useRouter();
    const selectedCategory = router.query.productCategory;

    return (
        <div className="max-w-7xl mx-auto p-6">
            <Head>
                <title>PC Empire - {selectedCategory}</title>
                <meta name="Category Page" description="PC Empire category page" />
            </Head>
            <p className="font-semibold">
                <span>Showing results for </span>
                <span>{">"} </span>
                <span className="badge badge-success ">{selectedCategory}</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center mt-6">
                {
                    products?.map(product =>
                        <Productcard key={product?._id}
                            product={product} />)
                }
            </div>
        </div>
    );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
    return <RootLayout>
        {page}
    </RootLayout>
}

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.SERVER_BASE_URL}/products`);
    const data = await res.json();
    const paths = data?.data?.map(product => ({
        params: {
            productCategory: product?.category
        }
    }));
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`${process.env.SERVER_BASE_URL}/category?name=${params?.productCategory}`)
    const data = await res.json();
    return {
        props: {
            products: data.data
        }
    }
}