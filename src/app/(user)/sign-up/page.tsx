'use client'
import Input from '@/components/ui/Input'
import Link from 'next/link'
import React,{useState , useCallback} from 'react'
import shopping from '../../../../public/shop1.jpg'
import Image from 'next/image'
import toast from 'react-hot-toast'

const page = () => {
  
   const[name , setName] = useState("");
   const[email , setEmail] = useState("");
   const[password , setPassword] = useState("");
   const[isAdmin , setIsAdmin] = useState<boolean>(false);

   
   const onSubmit = () => {
       try {
        console.log(name , email , password , isAdmin);
        
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
          <h1 className='text-4xl flex justify-center font-mono text-purple-300' > Sign Up </h1>

          <Input type='text' placeholder='Name' value={name}  name='name' onChange={(e) => setName(e.target.value)}  />
          <Input type='email' placeholder='E-Mail' value={email} name='email' onChange={(e) =>  setEmail(e.target.value)}  />
          <Input type='password' placeholder='Password' value={password} name='password' onChange={(e) => setPassword(e.target.value)}  />

          <div className='px-4 py-1 gap-x-2 flex items-center' >
            <label htmlFor="">Join as Admin</label>
            <input type="checkbox" className='border-[3px] rounded-lg px-5' checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)}  />
          </div>


          <div className='flex gap-2 flex-col justify-center items-center'>
            <button
            onClick={onSubmit}
             className='text-xl font-mono text-purple-500 border-2 border-purple-500 px-4 py-1 rounded-lg hover:bg-purple-300 hover:text-white hover:border-purple-300' > 
            Sign Up
            </button>

            <h1> Already have an Account ?  <Link className='text-purple-400 hover:text-purple-500 ' href={"/sign-in"}> Sign In </Link> </h1>
          </div>

          </div>

       </div>
    </div>
  )
}

export default page
