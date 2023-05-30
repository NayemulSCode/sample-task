'use client'
import { useGetCategoriesQuery } from '@/app/redux/category/categoriesApi'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide, Navigation } from '../ui/slider'
import { ArrowPrevIcon } from '../icons/arrow-prev'
import { ArrowNextIcon } from '../icons/arrow-next'
import Image from 'next/image'
import cat1 from '../../public/image/c1.png'
import Link from 'next/link'

const CategorySlider = () => {
    const {data: categories, isLoading, isError} = useGetCategoriesQuery();
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const breakpoints = {
        320: {
            slidesPerView: 2,
        },

        440: {
            slidesPerView: 2,
        },

        620: {
            slidesPerView: 3,
        },

        820: {
            slidesPerView: 4,
        },

        1100: {
            slidesPerView: 4,
        },

        1280: {
            slidesPerView: 4,
        },
    };
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error occurred while fetching products</div>
    }
  return (
    <>
      <div className="m-auto lg:space-s-8 w-full md:py-10 py-3 md:mb-10 mb-3 px-4 md:px-6 max-w-[1640px] twxl_px_none lg:px-8 category_section_wrap">
        <div className="relative !ml-0 inner">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current!, // Assert non-null
              nextEl: nextRef.current!, // Assert non-null
            }}
            breakpoints={breakpoints}
            slidesPerView={4}
            spaceBetween={15}
            autoplay={{
              delay: 1800,
              disableOnInteraction: true,
            }}
          >
            {categories &&
              categories.map((category: any, index: number) => (
                <SwiperSlide className="text-center" key={index}>
                  <Link href="#">
                    <div className="relative border-[2px] border-[#fff]">
                      <div className="cat_img_wrap">
                        <Image
                          src={cat1}
                          alt="img"
                          height={200}
                          className="w-full"
                        />
                      </div>
                      <div className="absolute category_label flex items-center justify-between left-[-9px] bottom-[15px] px-[15px]">
                        <h4 className="md:text-[25px] sm:text-[18px] font-normal md:leading-[36px] sm:leading-[25px] mr-[20px] text-[#000] capitalize">
                          {category}
                        </h4>
                        <span className="text-[#14B1F0] md:text-[21px] sm:text[16px] leading-[53px]">
                          Shop
                        </span>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
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
    </>
  );
}

export default CategorySlider