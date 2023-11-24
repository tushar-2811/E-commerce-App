import React from 'react'
import CategoriesList from '@/components/Categories/CategoriesList'


const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
      <CategoriesList/>
      <div className='container w-5/6 mx-auto mt-4' >
        {children}
      </div>
      
    </div>
  )
}

export default layout
