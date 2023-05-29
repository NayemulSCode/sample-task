import Link from 'next/link'
import React from 'react'
import Logo from '../public/image/logo.png'
import Image from 'next/image'
import { FaSearch, FaHeadphones, FaUser, FaBars, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Visa from '../public/image/visa.png'
import masterCard from '../public/image/master_card.png'
import cash from '../public/image/cash.png'
import easy from '../public/image/easy_plans.png'
const Footer = () => {
  return (
      <footer className="w-full">
          <div className="w-full border-b border-[#676464bf] max-w-[1640px]  twxl_px_none mx-auto bg-[#393939] text-[#ffffff] lg:px-6 md:px-4 px-3 md:pt-[70px] pt-[40px] md:pb-[60px] pb-[40px] md:grid lg:grid-cols-[22.3%,22.3%,22.3%,30.3%] md:grid-cols-[20%,40%,30%] relative">
              <div className='md:mb-0 mb-[20px]'>
                <div className='md:mb-2 mb-0'>
                  <Link href="#">
                      <Image
                          src={Logo}
                          width={150}
                          title='winstore_logo'
                          alt='winstore_logo'
                          className='mr-[30px]'
                      />
                  </Link>
                </div>
                  <ul className="md:mb-0 mb-[20px]">
                      <li className="md:mb-4 mb-[8px] flex align-middle gap-2">
                          <h6 className="md:text-[14px] text-[#00CAD7] text-[13px] font-bold ">Got questions? Call us 24/7!</h6>
                      </li>
                      <li className="md:mb-4 mb-[8px] flex align-middle gap-2">
                          <div className="flex items-center">
                              <Link href="tel:">
                                  <p className="text-[13px] text-[#FFFFFF]">
                                      03 111 666 144<br />
                                      0317 1777015.
                                  </p>
                              </Link>
                          </div>
                      </li>
                      <li className="md:mb-1 mb-0 flex align-middle gap-2">
                          <h6 className="md:text-[14px] text-[#00CAD7] text-[13px] font-bold ">Contact info</h6>
                      </li>
                      <li className="md:mb-4 mb-0 flex align-middle gap-2">
                            <Link href="mailto:info@winstore.pk">
                                <p className="text-[13px] text-[#FFFFFF]">
                                    info@winstore.pk
                                </p>
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
              <div className="md:mb-0 md:px-3 px-0 mb-[20px]">
                  <h5 className="md:text-[20px]  text-[#00CAD7] text-[12px] font-bold md:mb-8 mb-[15px]">
                      Trending
                  </h5>
                  <div className="">
                      <ul className="md:mb-6 lg:mr-[100px]">
                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">Installments</p>
                              </Link>
                          </li>
                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">Grocery</p>
                              </Link>
                          </li>
                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">Health & Beauty</p>
                              </Link>
                          </li>
                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">Home Appliances</p>
                              </Link>
                          </li>
                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">Mobile Accessories</p>
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="md:mb-0 md:px-3 px-0 mb-[20px]">
                  <h5 className="md:text-[20px] text-[12px] text-[#00CAD7] font-bold md:mb-8 mb-[15px]">
                      Information
                  </h5>
                  <div className="">
                      <ul className="md:mb-6 lg:mr-[100px]">

                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">About Us</p>
                              </Link>
                          </li>
                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">Contact Us</p>
                              </Link>
                          </li>

                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">
                                      FAQs
                                  </p>
                              </Link>
                          </li>
                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">Shipping & Return</p>
                              </Link>
                          </li>
                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">Privacy policy</p>
                              </Link>
                          </li>

                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">Terms & Conditions</p>
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="md:mb-0 md:px-3 px-0 mb-[20px]">
                  <h5 className="md:text-[20px] text-[12px] text-[#00CAD7] font-bold md:mb-8 mb-[15px]">
                      Customer Care
                  </h5>
                  <div className="">
                      <ul className="md:mb-6 lg:mr-[100px]">

                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">My Account</p>
                              </Link>
                          </li>
                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">Track Your Order</p>
                              </Link>
                          </li>
                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">Recently Viewed</p>
                              </Link>
                          </li>
                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">
                                      Wishlist
                                  </p>
                              </Link>
                          </li>
                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">Compare</p>
                              </Link>
                          </li>
                          <li className='md:mb-1 mb-0'>
                              <Link href="#">
                                  <p className="text-[13px] hover:underline">Become a Vendor</p>
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>
            <div className="">
                <ul className="flex items-center text-[#fff]">
                    <li className='mr-[20px] '>
                        <Link href="#">
                            <Image
                                src={Visa}
                                width={100}
                                height={60}
                                title='Visa'
                                alt='Visa'
                                className='mr-[30px]'
                            />
                        </Link>
                    </li>
                    <li className='mr-[20px]'>
                        <Link href="#">
                            <Image
                                src={masterCard}
                                width={100}
                                height={60}
                                title='Mater Card'
                                alt='Master Card'
                                className='mr-[30px]'
                            />
                        </Link>
                    </li>
                    <li className='mr-[20px] '>
                        <Link href="#">
                            <Image
                                src={cash}
                                width={100}
                                height={60}
                                title='Cash'
                                alt='Cash'
                                className='mr-[30px]'
                            />
                        </Link>
                    </li>
                    <li className='mr-[20px] '>
                        <Link href="#">
                            <Image
                                src={easy}
                                width={100}
                                height={60}
                                title='Easy'
                                alt='Easy'
                                className='mr-[30px]'
                            />
                        </Link>
                    </li>
                </ul>
            </div>
          </div>
          <div className="w-full max-w-[1640px] twxl_px_none mx-auto flex  items-center  justify-start bg-[#000] text-[#ffffff] md:px-8 px-4 text-center">
              <p className="text-[11px] text-gray-400  block text-center py-4">
                   &copy; 2023 Winstore. All Rights Reserved..
              </p>
          </div>
      </footer>
  )
}

export default Footer