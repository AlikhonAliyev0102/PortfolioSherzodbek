import React, { useState } from 'react';
import Color from './Color';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Layout = ({children}) => {
    const router = useRouter();
    const [click, setClick] = useState(true)

    const menuItems = [
        {
          href: '/',
          title: 'Home',
          img: '/home.svg'
          
        },
        {
          href: '/about',
          title: 'About',
          img: '/user.svg'
          
        },
        {
            href: '/services',
            title: 'Services',
            img: '/list.svg'
        },
        {
            href: '/portfolio',
            title: 'Portfolio',
            img: '/briefcase.svg'

            
        },
        {
          href: '/contact',
          title: 'Contact',
          img: '/comments.svg'
        },
      ];
    return (
        <div className='min-h-screen flex flex-col navbar'>
      
            <div className='flex flex-row flex-1'>
                {/* <div className='res'><span></span></div> */}
                <aside className=' w-60 text-center '>
                    <a href="#" className=' tip text-center w-60 '> <span>Ali</span>Dev</a>
                    <nav>
                        <ul >
                        {menuItems.map(({ href, title,img }) => (
                            <li className='m-2' key={title}>
                                <Link href={href} className={`flex p-2 text-dark font-semibold rounded  cursor-pointer ${
                                    router.asPath === href && ' text-rose-600'
                                }`}>
                                    <Image src={img} width={15} height={10}/>
                                    <h1>{title}</h1>
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </nav>
                </aside>
                <main className='flex-1'>{children}</main>
            </div>
        </div>
    );
};


export default Layout;