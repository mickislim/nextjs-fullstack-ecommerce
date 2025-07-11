'use client'

import Stripe from "stripe"
import Image from "next/image"
import { Button } from "./ui/button"
import { useCartStore } from "@/store/cart-store"
interface Props{
    product:Stripe.Product
}
export const ProductDetail=({product}:Props)=>{
const {items,addItem,removeItem}=useCartStore()

    const price = product.default_price as Stripe.Price

const cartItem= items.find((item)=>item.id === product.id)
const quantity =cartItem? cartItem.quantity : 0

const onAddItem =()=>{
    addItem({
        id:product.id,
        name:product.name,
        price:price.unit_amount as number,
        imageUrl:product.images? product.images[0] :  null,
        quantity:1
    })
}
    return(
<div className="flex justify-between items-center gap-4">
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

                    <div>
                        <h1>{product.name}</h1>
                        {product.description && <p>{product.description}</p>}
                        {price && price.unit_amount &&  ( <p>${(price.unit_amount / 100).toFixed(2)}</p>)}
                    
                    <div>
                        <Button onClick={() => removeItem(product.id)} >-</Button>
                        <span className="mx-2">{quantity}</span>
                         <Button onClick={onAddItem}>+</Button>
                    </div>
                    </div>
</div>
    )

}