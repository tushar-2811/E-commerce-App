'use client'
import Input from '@/components/ui/Input'
import Link from 'next/link'
import React,{useState , useCallback} from 'react'
import shopping from '../../../../public/shopping.jpg'
import Image from 'next/image'
import toast from 'react-hot-toast'

const page = () => {
  const[email , setEmail] = useState("");
   const[password , setPassword] = useState("");
   const [isAdmin , setIsAdmin] = useState<boolean>(false);

   const onSubmit = () => {
    try {
     console.log(email , password , isAdmin);
     
    } catch (error) {
       console.log(error);
       toast.error("something went wrong")
    }
}

  return (
    <div className='m-8 flex justify-center items-center mx-auto '>
        
       <div className=' md:flex md:justify-between px-8 py-10 w-5/6 border-2 ' >
          
          <div className='hidden md:flex md:w-2/3 rounded-lg' >
            <Image className='rounded-lg shadow-xl' src={shopping} alt="shopping image" />
          </div>

          <div className='md:w-1/3  flex flex-col justify-center ' >
          <h1 className='text-4xl flex justify-center font-mono text-purple-300' > Sign In </h1>
   
          <Input type='email' value={email} placeholder='E-Mail' name='email' onChange={(e) => setEmail(e.target.value)}  />
          <Input type='password' value={password} placeholder='Password' name='password' onChange={(e) => setPassword(e.target.value)}  />

          <div className='px-4 py-1 gap-x-2 flex items-center' >
            <label htmlFor="">Admin</label>
            <input type="checkbox" className='border-[3px] rounded-lg px-5' checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} />
          </div>

          <div className='flex gap-2 flex-col justify-center items-center'>
            <button
            onClick={onSubmit} 
            className='text-xl font-mono text-purple-500 border-2 border-purple-500 px-4 py-1 rounded-lg hover:bg-purple-300 hover:text-white hover:border-purple-300' > 
            Sign In 
            </button>

            <h1> Don't have an Account ?  <Link className='text-purple-400 hover:text-purple-500 ' href={"/sign-up"}> Sign Up </Link> </h1>
          </div>

          </div>

       </div>
    </div>
  )
}

export default page
