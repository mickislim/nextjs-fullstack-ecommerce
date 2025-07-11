'use client'
import { useCartStore } from "@/store/cart-store";
import { Link } from "lucide-react";
import { useEffect } from "react";

export default function SuccessPage(){
    const {clearCart}=useCartStore()
    useEffect(()=>{
clearCart()
    },[ clearCart ])
    return <div>
        <h1>Payment Successful</h1>
        <p>Thank you for your purchase your order is being processed</p>
        <Link href={'/products'}>
Continue Shopping
        </Link>
    </div>
}