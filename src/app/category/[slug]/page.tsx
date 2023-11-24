import React from 'react'
import ItemCard from '@/components/ui/ItemCard'

interface Params {
    params : {
        slug : string
    }
}

const page:React.FC<Params> = ({params}) => {
     console.log(params.slug)
  return (
    <div className=''>
     <ItemCard/>
     <ItemCard/>
     <ItemCard/>
     <ItemCard/>
     <ItemCard/>
     <ItemCard/>
    </div>
  )
}

export default page
