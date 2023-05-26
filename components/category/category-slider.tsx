'use client'
import { useGetCategoriesQuery } from '@/app/redux/category/categoriesApi'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide, Navigation } from '../ui/slider'
import { ArrowPrevIcon } from '../icons/arrow-prev'
import { ArrowNextIcon } from '../icons/arrow-next'

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
            slidesPerView: 7,
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
          <div className="m-auto lg:space-s-8 w-full md:py-10 py-3 px-4 md:px-6 max-w-[1640px] bg-[#F8F8F8] twxl_px_none lg:px-8 md:mb-0 mb-[20px]">
              <div className="relative !ml-0">
                  <Swiper
                      modules={[Navigation]}
                      navigation={{
                          prevEl: prevRef.current!, // Assert non-null
                          nextEl: nextRef.current!, // Assert non-null
                      }}
                      breakpoints={breakpoints}
                      slidesPerView={3}
                      spaceBetween={5}

                      autoplay={{
                          "delay": 1800,
                          "disableOnInteraction": true
                      }}
                  >
                      {
                          categories && categories.map((category: any, index: number) => (
                              <SwiperSlide className='text-center' key={index}>
                                <h4>{category}</h4>
                                  {/* <Image
                                      src={}
                                      alt={}
                                      height={60}
                                      width={100}
                                  /> */}
                              </SwiperSlide>
                          ))
                      }
                  </Swiper>
                  <div
                      ref={prevRef}
                      className="banner-slider-prev group_nav_prev hidden md:flex items-center justify-center text-heading bg-light outline-none absolute top-[31px] -mt-4 z-10 cursor-pointer !left-[0px] -start-[30px] lg:-start-4 focus:outline-none transition-all duration-200 hover:bg-black hover:text-light hover:border-black"
                  >
                      <span className="sr-only">{('text-previous')}</span>
                      <ArrowPrevIcon />
                  </div>
                  <div
                      ref={nextRef}
                      className="banner-slider-next group_nav_next hidden md:flex items-center justify-center text-heading bg-light outline-none absolute top-[31px] -mt-4 z-10 cursor-pointer !right-[0px] -end-[30px] lg:-end-4 focus:outline-none transition-all duration-200 hover:bg-black hover:text-light hover:border-black"
                  >
                      <span className="sr-only">{('text-next')}</span>
                      <ArrowNextIcon />
                  </div>
            </div>
        </div>
                
      </>
  )
}

export default CategorySlider