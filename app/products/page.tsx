import { ProductDetail } from "@/components/product-detail";
import { stripe } from "@/lib/stripe"

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ['default_price'],
  });

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
}
