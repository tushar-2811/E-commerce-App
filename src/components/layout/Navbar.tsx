'use client';
import React,{useState} from 'react'
import Link from 'next/link';



const Navbar = () => {
     
    
    const handleLogout = async() => {

    }
    return (
        <div className='container w-5/6 mx-auto mt-2'>
            <div className="navbar bg-base-100 border-2 shadow-xl border-purple-500 rounded-2xl">
                <div className="flex-1 ">
                    <Link href={"/"} className="text-2xl font-mono text-neutral-600"> Gen<span className='text-purple-500'>Z</span> <span className='' >Shop</span> </Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg"> Items In Cart : 8 </span>
                                <span className="text-neutral-500">Subtotal: <span className='text-neutral-800 text-xl '>$999</span></span> 
                                <div className="card-actions">
                                    <button className="font-mono text-lg border-2 border-purple-500 text-purple-500 rounded-md px-4 py-1 hover:bg-purple-500 hover:text-white ">
                                        <Link href={"/cart"} >View cart</Link>
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        
                           
                                <>
                                 <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                               <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                               </div>
                               </label>
                                </>
                            
                        
                       
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link href={"/profile"} className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link href={'/orders'}>My Orders</Link></li>

                            <li><Link href={'/settings'}>Settings</Link></li>
                            <li><h1 onClick={handleLogout} className='text-red-500 text-xl' >Logout</h1></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
