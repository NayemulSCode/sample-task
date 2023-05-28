'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch, FaHeadphones, FaUser, FaBars, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import Logo from '../public/image/logo.png'

const Header = () => {
  return (
    <div className=''>
        <div className="max-w-[1640px] w-full mx-auto lg:px-8 md:px-6 px-4 py-[7px] flex items-center justify-between bg-[#03484D]">
            <div className='flex items-center'>
                <Link href="#">
                    <Image
                        src={Logo}
                        width={150}
                        title='winstore_logo'
                        alt='winstore_logo'
                        className='mr-[30px]'
                    />
                </Link>
                <div className='flex h-[40px] bg-[#fff] py-[5px] px-[18px] rounded-[10px]'>
                    <select className='select_cat h-full border-0 outline-0 !shadow-none text-[#ABA3A3]' name="categories" id="categories">
                        <option defaultValue="All Categories" value="all categories">All Categories</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Fashion">Fashion</option>
                    </select>
                    <div className="relative srcch_wrap">
                            <input className='md:w-[320px] h-full text-[#ABA3A3] pl-[20px] border-0 outline-0 !shadow-none' type="text" placeholder='Search for products' />
                        <div className='w-[50px] h-[40px] flex items-center justify-center top-[-5px] rounded-tr-[10px] rounded-br-[10px] bg-[#B6B6B6] cursor-pointer absolute right-[-18px]'>
                            <FaSearch className='text-[#fff] text-[22px]' />
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
        <div className="max-w-[1640px] w-full mx-auto lg:px-8 md:px-6 px-4 py-[10px] flex items-center justify-between bg-[#0E3B3E]">
            <ul className='flex items-center text-[#fff]'>
                <li className='mr-[20px]'>
                    <Link href="#" className='flex items-center text-[15px]'>
                        <FaBars className='mr-[7px] mb-[2px]' />
                        <span>Brouse By Category</span>
                    </Link>
                </li>
                <li className='mr-[20px]'>
                    <Link href="#" className='text-[15px]'>
                        Home
                    </Link>
                </li>
                <li className='mr-[20px]'>
                    <Link href="#" className='text-[15px]'>
                        Easy Monthly Installments
                    </Link>
                </li>
                <li className='mr-[20px]'>
                    <Link href="#" className='text-[15px]'>
                        Shop by Brands
                    </Link>
                </li>
                <li className='mr-[20px]'>
                    <Link href="#" className='text-[15px]'>
                        Become a Vendor
                    </Link>
                </li>
            </ul>
            <ul className="flex items-center text-[#fff]">
                <li className='mr-[20px]'>
                    <Link href="#">
                        <FaFacebookF className='text-[22px]' />
                    </Link>
                </li>
                <li className='mr-[20px]'>
                    <Link href="#">
                        <FaTwitter className='text-[22px]' />
                    </Link>
                </li>
                <li className='mr-[20px]'>
                    <Link href="#">
                        <FaLinkedinIn className='text-[22px]' />
                    </Link>
                </li>
                <li className=''>
                    <Link href="#">
                        <FaInstagram className='text-[22px]' />
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header