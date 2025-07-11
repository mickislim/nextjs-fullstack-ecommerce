'use client'

import Link from "next/link"
import { ShoppingCartIcon,Bars3Icon,XMarkIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";


export const Navbar= ()=>{
    const [mobileOpen,setMobileOpen]= useState<boolean>(false)
    const {items}= useCartStore()
    const cartCount=items.reduce((acc,item)=> acc + item.quantity,0)

    useEffect(()=>{
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setMobileOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return(
        <nav className="bg-blue-700">
            <div>
                <Link href='/'>My Ecommerce</Link>
            </div>

            <div>
                <Link href='/'>Home</Link>
                <Link href='/products'>Products</Link>
                <Link href='/checkout'>Checkout</Link>
            </div>
            <div>
                <Link href='/checkout'>
                <ShoppingCartIcon className="h-6 w-6 text-white" />
{cartCount > 0 && <span>{cartCount}</span>}
                </Link>

            <Button className="md:hidden" onClick={()=>setMobileOpen(prev=>!prev)} variant='ghost'>{mobileOpen ? <XMarkIcon className="h-6 w-6 text-white" /> : <Bars3Icon className="h-6 w-6 text-white" />}</Button>
            </div>
            {mobileOpen && <nav> 
                <ul>
                   <li><Link href='/'>Home</Link></li>
                   <li><Link href='/products'>Products</Link></li>
                   <li><Link href='/checkout'>Checkout</Link></li>
                </ul>
                </nav>}
        </nav>
    )
}
