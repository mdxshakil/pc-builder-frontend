import RootLayout from "@/components/layout/RootLayout"
import Productcard from "@/components/ui/Productcard"

export default function HomePage({ featuredProducts }) {
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-12 place-items-center max-w-7xl mx-auto">
      {
        featuredProducts.map(product => <Productcard
          key={product?._id}
          product={product}
        />)
      }
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
    }
  }
}