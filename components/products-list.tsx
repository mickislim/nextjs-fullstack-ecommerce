'use client'
import React, { useState } from 'react'
import Stripe from 'stripe'
import { ProductCard } from './product-card'

interface Props{
    products:Stripe.Product[]
}

export const ProductList = ({products}:Props) => {
    const [searchTerm,setSearchTerm]= useState<string>('')

    const filteredProduct = products.filter((product)=>{
        const term = searchTerm.toLowerCase()
        const nameMatch = product.name.toLowerCase().includes(term)
        const descriptionMatch = product.description? product.description.toLowerCase().includes(term) :false
        return nameMatch || descriptionMatch
        return nameMatch || descriptionMatch
    })
  return (
    <div>
        <div>
            <input type='text' placeholder='Search Products'value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        </div>
      <ul>
        {filteredProduct.map((product,key)=>{
            return(
                <li key={key}><ProductCard product={product}/></li>
            )
        })}
      </ul>
    </div>
  )
}


