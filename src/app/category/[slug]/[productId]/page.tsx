import Wrapper from '@/components/layout/Wrapper'
import { IoMdHeartEmpty } from 'react-icons/io'
import React from 'react'
import ProductDetailsCarousel from '@/components/ui/ProductDetailsCarousel'
import RelatedProducts from '@/components/ui/RelatedProducts'

interface Params {
    params : {
        slug : string,
        productId : number

    }
}

const page:React.FC<Params> = ({params}) => {
  return (
    <div className='my-10' >
      <Wrapper className="">
         <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] ' >
            {/* left Column Start */}
        <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full
                        mx-auto lg:mx-0  '>
             <ProductDetailsCarousel/>
            </div>
            {/* Left Column End */}
    
            {/* Right Column Start */}
            <div className='flex-[1]  ' >
               <div>
                 <h1 className='text-3xl font-semibold font-sans' >Nike Jordan Retro</h1>
                 <h2 className='text-xl text-black/[0.5]' > Men's Running Shoes </h2>
               </div>

               <div className='pt-3'>
               <h2 className=' text-lg font-sans font-semibold text-black/[0.8]' >MRP : $109.00 </h2>
               <p className='text-sm font-sans text-black/[0.3]'>incl. of taxes </p>
               </div>

               <div className='py-4 '>
                <h1 className='text-2xl font-sans font-medium border-b-2 mb-2' >Product Details</h1>
                <p className='text-black/[0.8]' > White Shoes with Orange Patches very much perfect for Running and sports fit. Quality is Top Notch.  </p>
               </div>

               <div className='flex'>
                <button className='bg-black text-white w-1/2 py-3 mr-1 rounded-2xl hover:text-purple-500 hover:bg-white hover:border-2 hover:border-purple-500' >Add to Cart</button>
                <button  className=' text-black border-2 border-black w-1/2 py-3  mr-1 rounded-2xl flex justify-center items-center hover:border-purple-500 hover:text-purple-500' >WishList <span className='pl-1'> <IoMdHeartEmpty/> </span> </button>
               </div>

            </div >
            {/* Right Column Ends */}
            
         </div>

      
            <RelatedProducts/>
       
      </Wrapper>
    </div>
  ) 
}

export default page
