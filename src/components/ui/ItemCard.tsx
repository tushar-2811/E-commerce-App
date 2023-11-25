import React from 'react'
import nike from '../../../public/nike.webp'
import Image from 'next/image'

enum gender {
    Male,
    Female,
    GenderNeutral
}

interface ItemCardProps {
     ItemName : string;
     ItemBrand : string;
     ItemColor : string;
     PreferedGender : string;
     ItemPrice : number;
     AvailableSizes : number[];
     isInStock : boolean
}

const ItemCard = () => {
   
    return (
        <div className='' >

            <div className='hidden md:flex' >
                <div className="card w-96 glass">
                    <figure><Image src={nike} alt='shoes' /> </figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p className='text-neutral-600' >How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:hidden my-4'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><Image src={nike} alt='shoes' height={150} width={200} /></figure>

                    <div className="flex flex-col pl-4 pr-4 pt-2">
                        <h2 className="card-title pb-2">Nike AirMax </h2>

                        <p className='text-neutral-500 pb-3' >Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-between">
                           <button className='text-sm border-[3px] px-[2px] rounded-lg' > Male </button>
                           <button className='text-sm border-[3px] px-[2px] rounded-lg'> Brand </button>
                           <button className='text-sm border-[3px] px-[2px] rounded-lg'> Color </button>
                        </div>

                        <div className='flex justify-around items-center my-auto' >
                           <div className='flex flex-col' >
                           <h1> Price: $1000 </h1>
                           <h1> Price: $1000 </h1>
                           </div>
                           <button className='text-xl font-mono border-2 bg-black text-white px-4 py-1 rounded-lg ' > Cart </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
