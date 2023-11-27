import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Product1 from '@/assets/product-1.jpg'

const ProductCard = () => {
  return (
   <Link className='cursor-pointer transform rounded-2xl overflow-hidden bg-white duration-200 hover:scale-105 '
    href={`/category/Shoes/1`}>
    <Image src={Product1} alt='Product-image' className='w-full' />

    <div className='p-4 bg-black text-white/[0.9]' >
       <h2 className='text-lg font-medium '>Product Name</h2>  

    <div className='flex items-center text-white/[0.5]'>
       <p className='mr-2 text-lg font-semibold' >$20.00</p>
       <p className='mr-2 text-sm font-semibold line-through' >$25.00</p>

       <p className='ml-auto text-base font-medium  text-purple-500'>
        20% off
       </p>
    </div>


    </div>



   </Link>
  )
}

export default ProductCard
