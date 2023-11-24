'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const CategoriesData = [
    {
        name : "Shoes",
        url : "/category/shoes"
    },
    {
        name : "Watches",
        url : "/category/watches"
    },
    {
        name : "Jeans",
        url : "/category/jeans"
    },
    {
        name : "Jackets",
        url : "/category/jackets"
    }
]

const CategoriesList:React.FC = () => {
    const path = usePathname();
  return (
    <div className='container w-5/6 mx-auto mt-4'>
      <div>
        <h1 className='text-xl font-mono text-purple-400'>Check Out New Collection</h1>
      </div>

      <div className=' rounded-lg py-2 flex justify-around '>
          {
            CategoriesData.map((category) => ( 
           <div key={category.name} className={`px-4 py-1 rounded-xl font-mono border-2  text-lg hover:text-purple-500 ${path == `${category.url}` ? "text-white bg-purple-300 " : "text-purple-500 border-purple-500 "} `} >
             <Link className=''  href={category.url} > 
                {category.name}  
             </Link> 
           </div>
            ))
          }
      </div>
    </div>
  )
}

export default CategoriesList
