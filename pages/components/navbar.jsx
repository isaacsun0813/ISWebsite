import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar=()=>{
    return(
        <div className='fixed w-full h-[25px] shadow-xl z-[100'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src="/../public/photos/logo.JPEG" alt="logo" width='125' height='50'/>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className ='ml-10 text-sm uppercase hover:border-b'> Home</li>
                        </Link>
                        <Link href='/'>
                            <li className ='ml-10 text-sm uppercase hover:border-b'> About</li>
                        </Link>
                        <Link href='/'>
                            <li className ='ml-10 text-sm uppercase hover:border-b'> Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className ='ml-10 text-sm uppercase hover:border-b'> Contact</li>
                        </Link>
                    </ul>
                    <div className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className='fixed left-0 top-0 w-full h-screen bg-black/80'>
                 <div className='fixed left-0 top-0 w-[75%] smlw-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>
                     <div>
                        <div classname='flex space-around'>
                            <Image src="/../public/photos/logo.JPEG" alt="/" width='85' height='35'/>
                            <div>
                                <AiOutlineClose />
                            </div>  
                        </div>
                     </div>
                 </div>
            </div>
        </div>
    )
}
export default Navbar