'use client'
import { Button } from '@/components/ui/button'
import { CardHeader ,Card, CardTitle, CardContent} from '@/components/ui/card'
import { useCartStore } from '@/store/cart-store'
import React from 'react'
import { CheckoutAction } from './checkout-action'

export default function CheckoutPage(){
    const {items,removeItem,addItem,clearCart}=useCartStore()
    const total= items.reduce((acc,item)=> acc + item.price * item.quantity,0)
    if(total === 0 || items.length ===0){
        return <div> <h1>Your Cart is Empty</h1></div>
    }
    return(
        <div>
          <h1>  Checkout</h1>
          <Card>

            <CardHeader>
<CardTitle> Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className='flex justify-between'>
                    {items.map((item,key)=>(
                        <li key={key}>
                            <div><span> {item.name}</span>
                            <span>{((item.price * item.quantity)/ 100).toFixed(2)}</span>
                            </div>

                            <div>
                              <Button onClick={() => removeItem(item.id)} >-</Button>
                        <span className="mx-2">{item.quantity}</span>
                         <Button onClick={() => addItem({...item,quantity: item.quantity + 1})}>+</Button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div>
                    Total : {((total) / 100).toFixed(2)}
                </div>
            </CardContent>
          </Card>
<form className='' action={CheckoutAction}>
    <input type='hidden' name='items' value={JSON.stringify(items)}/>
    <Button variant="default" className='mr-5'>
        Proceed to payment

    </Button>

    <Button onClick={() => clearCart()}>Clear Cart</Button>
</form>

        </div>
        
    )
}
