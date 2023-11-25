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

const Menu = ({showCatMenu , setShowCatMenu} : {showCatMenu:any , setShowCatMenu:any}) => {
  return (
   <ul className='hidden md:flex items-center gap-8 font-sans font-medium text-black'>
       {
         MenuItems.map((item) => {
           return (
            <React.Fragment key={item.name}>
               {
                 !!item?.submenu  ? (
                  <li
                   className='cursor-pointer gap-2 flex items-center relative hover:text-purple-500'
                   onMouseEnter={() => setShowCatMenu(true)}
                   onMouseLeave={() => setShowCatMenu(false)}

                   >

                    {item.name} 
                    <BsChevronDown size={14} />

                    {
                      showCatMenu && (
                        <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg' >
                          {subMenuData.map((subitem) => {
                            return (
                                <Link key={subitem.name} href={subitem.url} onClick={() => showCatMenu(false)} >
                                  <li className='h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md'>
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
                   <li className='cursor-pointer hover:text-purple-500'>
                    <Link href={item?.url} >
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

export default Menu
