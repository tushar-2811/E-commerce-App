'use client'
import Wrapper from "@/components/layout/Wrapper"
import HeroBanner from "@/components/ui/HeroBanner"
import ProductCard from "@/components/ui/ProductCard"

export default function Home() {
  return (
    <>
     <div>
      <HeroBanner/>

      <Wrapper className="" >

        {/* Heading and Paragraph */}
        <div className="text-center max-w-[800px] mx-auto my-[30px] md:my-[40px] ">
          <div className="text-[28px] md:[34px] mb-5 font-semibold leading-tight "  
          >Gen<span className="text-purple-500">Z</span> </div>

          <div className="text-neutral-600 text-md md:text-xl">
             Shopping Place For Generation <span className="font-semibold text-purple-500">Z</span>
          </div>
        </div>
        {/* Heading and Paragraph ends*/}


        {/* show products grid */}



        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14
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

        {/* Product grid ends */}


      </Wrapper>
       
     </div>
    
    </>
  )
}
