'use client';
import React,{useState , useEffect} from 'react'
import Wrapper from './Wrapper';
import {IoMdHeartEmpty} from 'react-icons/io'
import Link from 'next/link';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import { BsCart } from 'react-icons/bs';
import {VscChromeClose} from 'react-icons/vsc'
import {BiMenuAltRight} from 'react-icons/bi'




const Header = () => {
     const [mobileMenu , setMobileMenu] = useState(false);
     const [showCatMenu , setShowCatMenu] = useState(false);
     const [show , setShow] = useState('translate-y-0');
     const [lastScrollY , setLastScrollY] = useState(0);
    
    
    return (
       <>
       <header className={`w-full h-[50px] md:h-[80px] bg-white flex 
       items-center justify-between z-20 sticky top-0 transition-transform duration-300
       ${show}`} >
        
        <Wrapper className={"h-[60px] flex justify-around items-center"}>
            <div className='w-[40px] md:w-[60px]'>
                <Link href={"/"}>
                <h1 className='text-xl font-semibold md:text-2xl flex '> Gen <span className='text-purple-500 font-bold'>Z</span> </h1>
                </Link>
            </div>

            <Menu    
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}  />

           {mobileMenu &&  <MenuMobile
             showCatMenu={showCatMenu}
             setShowCatMenu={setShowCatMenu}
             setMobileMenu={setMobileMenu}
            />}

            <div className='flex items-center gap-2 text-black'>

                <div className='cursor-pointer w-8 md:w-12 h-8 md:h-12 rounded-full 
                flex justify-center items-center hover:bg-black/[0.05] 
                relative'>

                    <Link href="/cart">
                    <BsCart className="text-[15px] md:text-[20px]" />
                    </Link>

                   
                    <div className='h-[14px] md:h-[18px] min-w-[12px] md:min-w-[18px] 
                    rounded-full bg-red-600 absolute top-1 left-5 md:left-7
                     text-white text-[10px] md:text-[12px] flex justify-center 
                     items-center px-2 md:px-[5px]'>
                        5
                    </div>
                </div>

                <div className='cursor-pointer w-8 md:w-12 h-8 md:h-12 rounded-full 
                flex justify-center items-center hover:bg-black/[0.05] 
                relative'>

                    <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                    <div className='h-[14px] md:h-[18px] min-w-[10px] md:min-w-[18px] 
                    rounded-full bg-red-600 absolute top-1 left-5 md:left-7
                     text-white text-[10px] md:text-[12px] flex justify-center 
                     items-center px-2 md:px-[5px]'>
                        10
                    </div>
                </div>

               {/* icons-end */}

                {/* mobile icon start */}
               <div className='cursor-pointer w-8 md:hidden h-8 rounded-full 
                flex justify-center items-center hover:bg-black/[0.05] 
                relative -mr-2 '> 
                     
                     {
                        mobileMenu ? (
                            <>
                            <VscChromeClose className={`text-[16px] ${mobileMenu ? "text-red-500" : ""}`}
                             onClick={() => setMobileMenu(false)}
                            />
                            </>
                        ) : (
                            <>
                            <BiMenuAltRight className="text-[20px]"
                             onClick={() => setMobileMenu(true)}
                            />
                            </>
                        )
                     }


               </div>
 
            </div>
        </Wrapper>


      
       </header>
       </>
    )
}

export default Header
