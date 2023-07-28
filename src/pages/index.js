import RootLayout from "@/components/layout/RootLayout"
import Banner from "@/components/ui/Banner"
import CategoryButtons from "@/components/ui/CategoryButton"
import Productcard from "@/components/ui/Productcard"

export default function HomePage({ featuredProducts }) {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner/>
      <div className="pt-12 pb-6 text-center">
        <CategoryButtons />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center p-6">
        {
          featuredProducts?.map(product => <Productcard
            key={product?._id}
            product={product}
          />)
        }
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