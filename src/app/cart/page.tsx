import Wrapper from '@/components/layout/Wrapper'
import React from 'react'
import CartItem from '@/components/ui/cartItem'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-full md:py-20 flex flex-col gap-y-2' >
        <Wrapper className={""} >
            <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0 '>
                <h1 className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
                     Shopping Cart 
                </h1>
            </div>


            <div className='flex flex-col lg:flex-row gap-12 py-10' >


                <div className='flex-[2]'>
                    <div className='text-lg font-bold' > Cart Items </div>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>


                <div className='flex-[1] ' >

                <div className='text-lg font-bold' >
                      Summary 
                </div>

                <div className='p-5 my-5 bg-black/[0.05] rounded-xl '> 
                   <div className='flex  justify-between'>
                     <h1 className='uppercase text-md md:text-lg font-medium'> SUBTOTAL </h1>
                     <h1 className='text-md md:text-lg font-medium'> $ 987 </h1>
                   </div>

                   <div className='text-sm md:text-md py-5 border-t mt-5' >
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error molestias at illum beatae iusto temporibus sint soluta ducimus quod laboriosam!
                   </div>
                    

                    <div>

                    </div>



                </div>

               
                    <button className='bg-black text-white w-full rounded-full py-3 transition-transform hover:scale-95 hover:bg-black/[0.8] ' > Checkout </button>
                
                   
                </div>


            </div>

            {/* if cart is empty */}

            <div className="flex-[2] flex flex-col items-center pb-[50px] ">
                        {/* <Image
                            src="/empty-cart.jpg"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        /> */}
                        <span className="text-xl font-bold">
                            Your cart is empty
                        </span>
                        <span className="text-center mt-4">
                            Looks like you have not added anything in your cart.
                            <br />
                            Go ahead and explore top categories.
                        </span>
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            Continue Shopping
                        </Link>
                    </div>
        </Wrapper>     
    </div>
  )
}

export default page
