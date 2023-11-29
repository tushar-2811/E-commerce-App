import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import Product1 from '@/assets/product-1.jpg'
import Image from 'next/image'



const CartItem:React.FC = () => {
  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>

      <div className='shrink-0 aspect-square w-[80px] md:w-[120px] ' >
        <Image alt='product-image' src={Product1} />
      </div>

      <div className='w-full flex flex-col '>

        <div className='flex flex-col md:flex-row justify-between' >
           <div className='text-lg md:text-2xl font-semibold text-black/[0.8] '>
           Jordan Shoes
           </div>

           <div className='text-sm md:text-md font-medium text-black/[0.5] block md:hidden '>
             Men's Running Shoes
           </div>

           <div className='text-sm md:text-md font-bold text-black/[0.5] mt-2'>
            MRP : $ 9877
           </div>
          
        </div>
        {/* for desktop */}
         <div className='text-sm md:text-md font-medium text-black/[0.5] md:block hidden '>
             Men's Running Shoes
          </div>

          <div className='flex justify-between items-center'>

          <div className='flex items-center justify-between mt-4'>
             <div className='flex items-center gap-1' >
              <div className='font-semibold text-black/[0.5] '> Quantity: </div>
               
               <select className='hover:text-black' >
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>

               </select>
             </div>

          </div>

          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]  " />

          </div>

         





      </div>
      
    </div>
  )
}

export default CartItem
