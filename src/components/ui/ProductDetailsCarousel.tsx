import React from 'react'
import Product1 from '@/assets/product-1.jpg'
import Image from 'next/image'


const ProductDetailsCarousel = () => {
  return (
    <div>
    <Image src={Product1} alt='Product-image' className='w-full rounded-xl overflow-hidden transform duration-200 hover:scale-105' />
      
    </div>
  )
}

export default ProductDetailsCarousel
