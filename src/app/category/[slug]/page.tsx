'use client'
import React from 'react'
import Wrapper from '@/components/layout/Wrapper'
import ProductCard from '@/components/ui/ProductCard'


interface Params {
    params : {
        slug : string
    }
}

const page:React.FC<Params> = ({params}) => {
     console.log(params.slug)
  return (
    <div className='w-full md:py-20'>
    <Wrapper className="" >

     

       <div className='text-[28px] text-purple-500 border-b-2 text-center md:text-[34p] mb-5 font-semibold font-sans leading-tight '>
         {params.slug}
       </div>


      < div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14
        px-5 md:px-0" >
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>

        </div>
    
    </Wrapper>
    </div>
  )
}

export default page
