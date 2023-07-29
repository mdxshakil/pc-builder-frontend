import RootLayout from "@/components/layout/RootLayout";
import Productcard from "@/components/ui/Productcard";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";

const AllProductsPage = ({products}) => {
    return (
        <div className="max-w-7xl mx-auto p-6">
        <Head>
          <title>PC Empire - Products</title>
          <meta name="All products Page" description="PC Empire products" />
        </Head>
        <Fade>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center p-6">
              {
                products?.map(product => <Productcard
                  key={product?._id}
                  product={product}
                />)
              }
            </div>
        </Fade>
      </div>
    );
};

export default AllProductsPage;

AllProductsPage.getLayout = function getLayout(page) {
    return <RootLayout>
        {page}
    </RootLayout>
}

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.SERVER_BASE_URL}/products`);
    const data = await res.json();
    return {
        props: {
            products: data?.data
        },
        revalidate: 30
    }
}