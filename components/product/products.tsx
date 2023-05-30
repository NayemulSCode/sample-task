
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
      <div className="pb-[10x] sm:mt-[10px] mt-[6px] md:block relative border-border-200 border-opacity-70">
        <div className="flex flex-col pb-[15px]">
          <h2 className="text-[#333] uppercase md:text-[22px] text-[20px] font_sprn_semibold mb-[0px] text-start">
            <span className="text-[#15ADB7]">New</span> Arrivals
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
                  <div className="product_single_item offer_single_item text-center bg-light cursor-pointer p-[10px]">
                    <p className="text-[#000] text-[12px] font-normal leading-[15px] mb-[5px] line-clamp-1">
                      {product.category}
                    </p>
                    <Link
                      href={`/products/${product?.id}`}
                      className="font-normal text-[15px] leading-[18px] text-[#034E53] line-clamp-1 "
                    >
                      {product?.title}
                    </Link>
                    <div className="product_card">
                      <div className="product_card_img">
                        <Image
                          src={product.image}
                          alt={product.title}
                          title={product.title}
                          // layout={`fill`}
                          height={200}
                          width={300}
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="md:flex items-center justify-center mb-[12px]">
                        <span className="text-[#697475] md:text-[13px] leading-[16px] text-[11px] line-clamp-1 md:mr-[10px] font-normal">
                          <del>BDT 1,000</del>
                        </span>
                        <span className="text-[#0AAEB9] md:text-[15px] leading-[18px] text-[13px] font-normal line-clamp-1">
                          BDT {product?.price}
                        </span>
                      </div>
                      <button className="bg-[#15ADB7] hover:bg-[#03484D] text-[#fff] border-0 outline-0 px-[5px] py-[8px] w-full">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
        <div
          ref={prevRef}
          className="product_slide_prev mt-[-7px] flex items-center justify-center text-[#333]  absolute z-10 cursor-pointer transition-all duration-200 bg-[#15ADB7] hover:bg-darkBlue hover:text-light"
        >
          <ArrowPrevIcon width={25} height={25} />
        </div>
        <div
          ref={nextRef}
          className="product_slide_next mt-[-7px] flex items-center justify-center text-[#333]  absolute z-10 cursor-pointer transition-all duration-200 bg-[#15ADB7] hover:bg-darkBlue hover:text-light"
        >
          <ArrowNextIcon width={25} height={25} />
        </div>
      </div>
    </div>
  );
}

export default Products