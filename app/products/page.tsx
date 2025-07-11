import { ProductList } from '@/components/products-list'
import React from 'react'
import { stripe } from '@/lib/stripe'

export default async function ProductPage(){
    const products = await stripe.products.list({
        expand:['data.default_price'],
    })
    return(
        <div>
        <h1>All Products</h1>
       
            <ProductList products={products.data}/>
        
        </div>
    )
}
