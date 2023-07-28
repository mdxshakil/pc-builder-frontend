import RootLayout from "@/components/layout/RootLayout"
import CategoryButtons from "@/components/ui/CategoryButton"
import Productcard from "@/components/ui/Productcard"

export default function HomePage({ featuredProducts }) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-2">
        <CategoryButtons />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
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