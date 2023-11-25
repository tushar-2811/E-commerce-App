"use client"
import Input from '@/components/ui/Input'
import React from 'react'

const page = () => {
  return (
    <div>
      <form>
        <Input type='text' placeholder='Item-Name' name='ItemName' onChange={(e) => {}} value='' />
        <Input type='text' placeholder='Item-Brand' name='ItemBrand' onChange={(e) => {}} value='' />
        <Input type='text' placeholder='Item-Color' name='ItemColor' onChange={(e) => {}} value='' />

        <div className='flex gap-4' >
            <h1> Prefered Gender :  </h1>
            <div className='flex items-center gap-2' >
            <input type="radio" name="Male" value={""} className="radio" />
            <label htmlFor="">Male</label>

            <input type="radio" name="Female" value={""} className="radio" />
            <label htmlFor="">Female</label>
            </div>
        </div>

        <Input type='number' placeholder='Price' name='ItemPrice' onChange={() => {}} value='' />
         <div className='flex items-center gap-3'>
        <label> In Stock </label>
        <input type="checkbox"  />
         </div> 

        <textarea className='w-72 h-18 border-[3px] border-neutral-500 focus:border-purple-500 ' placeholder='Product Description' name='ItemDescription' onChange={() => {}} value={""} />
      </form>
    </div>
  )
}

export default page
