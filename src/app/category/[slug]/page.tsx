import React from 'react'


interface Params {
    params : {
        slug : string
    }
}

const page:React.FC<Params> = ({params}) => {
     console.log(params.slug)
  return (
    <div className=''>
      <h1>
        {params.slug}
      </h1>
    </div>
  )
}

export default page
