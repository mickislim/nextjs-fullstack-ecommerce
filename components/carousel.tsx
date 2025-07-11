'use client';

import React, { useEffect, useState } from 'react';
import Stripe from 'stripe'
import { Card, CardContent, CardTitle } from './ui/card'
import Image from 'next/image'
interface Props{
    products:Stripe.Product[]
}
const Carousel = ({products}:Props) => {
 const [current, setCurrent] = useState<number>(0);
  useEffect(()=>{
const interval =setInterval(()=>{
  setCurrent((prev)=>(prev+1)%products.length)
},3000)
return()=>clearInterval(interval);
  },[products.length])

  const currentProduct = products[current]
  const price = currentProduct.default_price as Stripe.Price
    return (
    <Card>
        {currentProduct.images && currentProduct.images[0] && (
 <div className="relative h-100 w-6/12">
    <Image
      alt={currentProduct.name}
      src={currentProduct.images[0]}
      fill
      className="object-cover"
    />
  </div>
        )}
 <CardContent>
    <CardTitle>
        {currentProduct.name}
        {price && price.unit_amount && ( <p>${(price.unit_amount / 100).toFixed(2)}</p>)}
    </CardTitle>
 </CardContent>
</Card>
  )
}

export default Carousel
