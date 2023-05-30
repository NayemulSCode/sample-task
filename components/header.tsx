'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch, FaHeadphones, FaUser, FaBars, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { AiFillCloseSquare, AiOutlineHeart } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import Logo from '../public/image/logo.png'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <>

            <div className=''>
                <div className="max-w-[1640px] w-full bg-[#03484D] mx-auto px-4 py-2 md:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
                    <div className='flex items-center'>
                        <Link href="#">
                            <Image
                                src={Logo}
                                width={150}
                                title='winstore_logo'
                                alt='winstore_logo'
                                className='mr-4 md:mr-6'
                            />
                        </Link>
                        <div className='md:flex h-10  hidden bg-white py-1 px-3 md:px-4 rounded-2xl'>
                            <select className='select_cat h-full border-0 outline-none shadow-none text-gray-500' name="categories" id="categories">
                                <option defaultValue="all categories">All Categories</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Fashion">Fashion</option>
                            </select>
                            <div className="relative srcch_wrap ml-3">
                                <input className='md:w-80 sm:w-60 h-full text-gray-500 pl-8 border-0 outline-none shadow-none' type="text" placeholder='Search for products' />
                                <div className='w-10 h-10 flex items-center justify-center md:top-[-4px] md:right-[-16px] top-[-4px] right-[-6px] rounded-tr-lg rounded-br-lg bg-gray-300 cursor-pointer absolute'>
                                    <FaSearch className='text-white text-lg' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <ul className='flex items-center text-[#fff]'>
                            <li className='mr-[20px]'>
                                <div>
                                    <span className='block text-[13px]'>Call Us Now</span>
                                    <Link href="tel: 011 5827918">
                                        <div className="flex">
                                            <FaHeadphones className='mr-[5px]' />
                                            <span>+011 5827918</span>
                                        </div>
                                    </Link>
                                    <Link href="#" className='block text-[13px]'>Sign In</Link>
                                </div>
                            </li>
                            <li className='mr-[20px]'>
                                <Link href="#">
                                    <FaUser className='text-[22px]' />
                                </Link>
                            </li>
                            <li className='mr-[20px]'>
                                <Link href="#">
                                    <AiOutlineHeart className='text-[22px]' />
                                </Link>
                            </li>
                            <li className=''>
                                <Link href="#">
                                    <div className='flex'>
                                        <div className="relative mr-[3px]">
                                            <FiShoppingCart className='text-[22px]' />
                                            <span className='absolute top-[-17px] right-[5px] text-[#FDDE3B]'>3</span>
                                        </div>
                                        <span>Cart</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-[1640px] w-full mx-auto bg-[#0E3B3E] px-4 py-2 md:px-6 lg:px-8 flex  justify-between items-center">
                    <ul className="flex items-center text-white ">
                        <li className="mr-4 md:block hidden">
                            <Link href="#" className="flex items-center md:text-[17px] text-[16px] leading-normal">
                                <FaBars className="mr-1" />
                                <span>Browse By Category</span>
                            </Link>
                        </li>
                        <li onClick={toggleDrawer} className="mr-4 md:hidden block">
                            <Link href="#" className="flex items-center md:text-[17px] text-[16px] leading-normal">
                                <FaBars className="mr-1" />
                                <span>Browse By Category</span>
                            </Link>
                        </li>
                        <li className="mr-4 md:block hidden">
                            <Link href="#" className="d:text-[14px] text-[12px] leading-normal">
                                Home
                            </Link>
                        </li>
                        <li className="mr-4 md:block hidden">
                            <Link href="#" className="d:text-[14px] text-[12px] leading-normal">
                                Easy Monthly Installments
                            </Link>
                        </li>
                        <li className="mr-4 md:block hidden">
                            <Link href="#" className="d:text-[14px] text-[12px] leading-normal">
                                Shop by Brands
                            </Link>
                        </li>
                        <li className='md:block hidden'>
                            <Link href="#" className="d:text-[14px] text-[12px] leading-normal">
                                Become a Vendor
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex items-center text-white">
                        <li className="mr-4">
                            <Link href="#">
                                <FaFacebookF className="text-lg" />
                            </Link>
                        </li>
                        <li className="mr-4">
                            <Link href="#">
                                <FaTwitter className="text-lg" />
                            </Link>
                        </li>
                        <li className="mr-4">
                            <Link href="#">
                                <FaLinkedinIn className="text-lg" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <FaInstagram className="text-lg" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <div className=''>
                    <div className='flex px-2 py-1 bg-[#03484D] justify-between items-center'>
                        <div>
                            <Link href="#">
                                <Image
                                    src={Logo}
                                    width={130}
                                    title='winstore_logo'
                                    alt='winstore_logo'
                                    className='mr-4 md:mr-6'
                                    onClick={toggleDrawer}
                                />
                            </Link>
                        </div>
                        <div onClick={toggleDrawer}><AiFillCloseSquare size={24} color="red" /></div>
                    </div>
                    <div className='pt-2 px-2'>
                        <ul className='flex align-middle  flex-col gap-3'>
                            <li onClick={toggleDrawer}>Easy Monthly Installments</li>
                            <li onClick={toggleDrawer}>Shop by Brands</li>
                            <li onClick={toggleDrawer}>Become a Vendor</li>
                        </ul>
                    </div>

                </div>
            </Drawer>
        </>
    )
}

export default Header