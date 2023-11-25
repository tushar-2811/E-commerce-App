import Link from 'next/link'
import React from 'react'
import {BsChevronDown} from 'react-icons/bs'

const MenuItems = [
  {
    name : "Home",
    url : "/",
    submenu : false
  },
  {
    name : "About",
    url : "/about",
    submenu : false
  },{
    name : "Categories",
    url : "",
    submenu : true
  },{
    name : "Contact",
    url : "/contact",
    submenu : false
  },
]

const subMenuData = [
  {
    name : "Shoes",
    url : ""
  },
  {
    name : "Jeans",
    url : ""
  },{
    name : "Watches",
    url : ""
  },{
    name : "Jackets",
    url : ""
  },
]

const MenuMobile = ({showCatMenu , setShowCatMenu , setMobileMenu} : {showCatMenu:any , setShowCatMenu:any , setMobileMenu : any}) => {
  return (
   <ul className='flex flex-col md:hidden font-bold absolute 
   top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t
    text-black'>
       {
         MenuItems.map((item) => {
           return (
            <React.Fragment key={item.name}>
               {
                 !!item?.submenu  ? (
                  <li
                   className='cursor-pointer py-4 px-5 border-b flex flex-col '
                   onClick={() => setShowCatMenu(!showCatMenu)}

                   >

                    <div className='flex justify-between items-center' >
                           {item.name} 
                           <BsChevronDown size={14} />
                    </div>


                    {
                      showCatMenu && (
                        <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4' >
                          {subMenuData.map((subitem) => {
                            return (
                                <Link key={subitem.name} 
                                href={subitem.url} 
                                onClick={() => {
                                    setShowCatMenu(false)
                                    setMobileMenu(false)
                                } } >
                                  <li className='py-4 px-8 border-t flex justify-between'>
                                {subitem.name}
                                <span className='opacity-50 text-sm' >10</span>
                                  </li>
                                </Link>    
                            )
                          })}
                        </ul>
                      )
                    }
                  </li>
                 ) : ( 
                   <li className='py-4 px-5 border-b'>
                    <Link href={item?.url} onClick={() => setMobileMenu(false)} >
                    {item.name}
                    </Link>
                   </li>
                 )
               }
            </React.Fragment>
           )
         })
       }
   </ul>
  )
}

export default MenuMobile
