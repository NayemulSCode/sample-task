
'use client'
import { useGetProductsQuery } from '@/app/redux/product/productApi'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useRef } from 'react'
import { Product } from '@/ts-types/generated'
import { ArrowNextIcon } from '../icons/arrow-next'
import { ArrowPrevIcon } from '../icons/arrow-prev'
import { Swiper, SwiperSlide, Navigation } from '../ui/slider'
const Products:FC = () => {
    const { data: products, isLoading, isError } = useGetProductsQuery(10)
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const breakpoints = {
        320: {
            slidesPerView: 2,
            spaceBetween: 6,
        },

        440: {
            slidesPerView: 2,
            spaceBetween: 8,
        },

        620: {
            slidesPerView: 2,
            spaceBetween: 12,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 13,
        },

        820: {
            slidesPerView: 3,
            spaceBetween: 14,
        },

        1100: {
            slidesPerView: 6,
            spaceBetween: 16,
        },

        1280: {
            slidesPerView: 6,
            spaceBetween: 18,
        },
    };
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error occurred while fetching products</div>
    }
  return (
      <div className="relative m-auto lg:space-s-8 w-full px-2 twxl_px_none lg:px-7 max-w-[1640px] md:px-5 md:mb-[30px] mb-[20px]">
          <div className="pb-[10x] sm:mt-[10px] mt-[6px] md:block hidden relative border-border-200 border-opacity-70">
              <div className="flex flex-col items-center pb-[15px]">
                  <h2 className="text-[#333] uppercase md:text-[22px] text-[20px] font_sprn_semibold mb-[0px] text-end">
                      New Arrivals
                  </h2>
              </div>
          </div>
          <div className="relative !ml-0">
              <Swiper
                  modules={[Navigation]}
                  navigation={{
                      prevEl: prevRef.current!, // Assert non-null
                      nextEl: nextRef.current!, // Assert non-null
                  }}
                  breakpoints={breakpoints}
                  slidesPerView={6}
              >
                  <div className="">
                      {products &&
                          products.map((product: Product, index: number) => (
                            <SwiperSlide key={index}>
                                  <div className="relative group promo_single_item my-[10px] offer_single_item flsh_wd_item md:h-[446px] text-center cursor-pointer rounded-bl-[5px] rounded-br-[5px] bg-[#ffffff] rounded-[5px]">
                                      <div className="md:p-[15px] p-[8px] md:pt-[15px] pt-[40px] relative text-[#000000] bg-[#ffffff] rounded-bl-[5px] rounded-br-[5px]"> 
                                          <p>{product.category}</p>
                                          <Link href={`/products/${product?.id}`}>
                                              {product?.title}
                                          </Link>

                                      </div>
                                      <div className="promo_card flsh_wd_img bg-[#ffffff] md:h-[315px] flex items-center justify-center rounded-tl-[5px] rounded-tr-[5px]">
                                          <Link href={`/products/${product?.id}`}>
                                              <div className="nextimg_wrapper">
                                                  <Image
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="next_img m-auto"
                                                    height={270}
                                                    width={280}
                                                  />
                                              </div>
                                          </Link>
                                      </div>
                                      <div className="md:p-[15px] p-[8px] md:pt-[15px] pt-[40px] relative bg-[#ffffff] rounded-bl-[5px] rounded-br-[5px]">
                                          <div className="md:flex justify-center">
                                              <span className="text-[#000000] md:text-[16px] text-[15px] font-bold line-clamp-1 md:mr-[10px]">
                                                  BDT {product?.price}
                                              </span>
                                              <span className="text-[#98928e] md:text-[13px] text-[11px] font-medium line-clamp-1">
                                                    <del>BDT 1,000</del>
                                                </span>
                                          </div>
                                      </div>
                                  </div>
                              </SwiperSlide>
                          ))}
                  </div>
              </Swiper>
              <div
                  ref={prevRef}
                  className="banner-slider-prev promo_slide_prev mt-[-7px] flex items-center justify-center text-[#333]  absolute z-10 cursor-pointer transition-all duration-200 bg-[#943590ad] hover:bg-darkBlue hover:text-light hover:border-[#943590ad]"
              >
                  <span className="sr-only">{'text-previous'}</span>
                  <ArrowPrevIcon width={25} height={25}  />
              </div>
              <div
                  ref={nextRef}
                  className="banner-slider-prev promo_slide_prev mt-[-7px] flex items-center justify-center text-[#333]  absolute z-10 cursor-pointer transition-all duration-200 bg-[#943590ad] hover:bg-darkBlue hover:text-light hover:border-[#943590ad]"
              >
                  <span className="sr-only">{'text-previous'}</span>
                  <ArrowNextIcon width={25} height={25} />
              </div>
          </div>
      </div>
  )
}

export default Products