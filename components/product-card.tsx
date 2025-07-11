import Link from 'next/link'
import React from 'react'
import Stripe from 'stripe'
import { Card, CardContent, CardTitle } from './ui/card'
import Image from 'next/image'
import { CardHeader } from './ui/card'
import { Button } from './ui/button'
interface Props{
    product:Stripe.Product
}
export const ProductCard = ({product}:Props) => {
      const price = product.default_price as Stripe.Price

    return (
       <Link href={`/products/${product.id}`}><Card>
            {product.images && product.images[0] && (
         <div className="relative h-100 w-6/12">
            <Image
              alt={product.name}
              src={product.images[0]}
              fill
              className="object-cover"
            />
          </div>
                )}
                <CardHeader>
<CardTitle>{product.name}</CardTitle>
<CardContent>{price && price.unit_amount &&  ( <p>${(price.unit_amount / 100).toFixed(2)}</p>)}
<Button>View Details</Button>
</CardContent>
                </CardHeader>
        </Card></Link>
    )
}
