'use client'
import React from 'react'

interface InputProps {
    type : string,
    placeholder : string
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void;
    name : string;
    value : string
}

const Input:React.FC<InputProps> = ({type,placeholder,onChange,name , value}) => {
  return (
     <input type={type} placeholder={placeholder} onChange={onChange} value={value} name={name} 
      className='
        px-4
        py-1
        focus:outline-purple-500
        border-[3px]
        rounded-lg
        border-neutral-400
        m-4
      '
     />
  )
}

export default Input
