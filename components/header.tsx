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
          <div className="max-w-[1640px] w-full bg-[#03484D] mx-auto px-4 py-2 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
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
                  <div className='flex h-10 bg-white py-1 px-3 md:px-4 rounded-2xl'>
                      <select className='select_cat h-full border-0 outline-none shadow-none text-gray-500' name="categories" id="categories">
                          <option defaultValue="all categories">All Categories</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Fashion">Fashion</option>
                      </select>
                      <div className="relative srcch_wrap ml-3">
                          <input className='md:w-80 h-full text-gray-500 pl-8 border-0 outline-none shadow-none' type="text" placeholder='Search for products' />
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
          <div className="max-w-[1640px] w-full mx-auto bg-[#0E3B3E] px-4 py-2 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
              <ul className="flex items-center text-white mb-4 md:mb-0">
                  <li className="mr-4">
                      <Link href="#" className="flex items-center md:text-[17px] text-[14px] leading-normal">
                          <FaBars className="mr-1" />
                          <span>Browse By Category</span>
                      </Link>
                  </li>
                  <li className="mr-4">
                      <Link href="#" className="d:text-[14px] text-[12px] leading-normal">
                          Home
                      </Link>
                  </li>
                  <li className="mr-4">
                      <Link href="#" className="d:text-[14px] text-[12px] leading-normal">
                          Easy Monthly Installments
                      </Link>
                  </li>
                  <li className="mr-4">
                      <Link href="#" className="d:text-[14px] text-[12px] leading-normal">
                          Shop by Brands
                      </Link>
                  </li>
                  <li>
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
  )
}

export default Header