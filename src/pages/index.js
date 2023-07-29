import RootLayout from "@/components/layout/RootLayout"
import CategoryButtons from "@/components/ui/CategoryButton"
import Productcard from "@/components/ui/Productcard"
import Spinner from "@/components/ui/Spinner"
import dynamic from "next/dynamic"
import Head from "next/head"

export default function HomePage({ featuredProducts }) {
  const DynamicBanner = dynamic(() => import('@/components/ui/Banner'), {
    loading: () => <Spinner />
  })
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>PC Empire - Home</title>
        <meta name="Home Page" description="PC Empire homepage" />
      </Head>
      <DynamicBanner />
      <div className="pt-12 pb-6 text-center">
        <CategoryButtons />
      </div>
      <div>
        <h1 className="text-center text-2xl sm:text-3xl">Our Featured Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center p-6">
          {
            featuredProducts?.map(product => <Productcard
              key={product?._id}
              product={product}
            />)
          }
        </div>
      </div>
    </div>

  )
}


HomePage.getLayout = function getLayout(page) {
  return <RootLayout>
    {page}
  </RootLayout>
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.SERVER_BASE_URL}/featured-products`);
  const data = await res.json();
  return {
    props: {
      featuredProducts: data?.data
    },
    revalidate: 30
  }
}