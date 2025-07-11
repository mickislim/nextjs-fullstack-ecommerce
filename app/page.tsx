import Carousel from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await stripe.products.list({
    expand:["data.default_price"],
    limit:5,
  });

  console.log(products)
  return (
   <div className="flex flex-col">
    <section className="flex">
      <div className="flex">

        <div className="">
          <h2>Welcome to My Ecommerce</h2>
          <p>Discover the latest products at the best prices</p>
          <Button asChild variant='default'>
            <Link href='/products'>Browse All Products</Link>
          </Button>
          {/* <button>hello</button> */}


        </div>

        <Image alt='banner image' width={450} height={450} src={products.data[0].images[0]} />
      </div>
    </section>

    <section className="h-[25vh]">
      <Carousel products={products.data} />
    </section>
   </div>
  );
}
