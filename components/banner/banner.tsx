'use client'
import React, { FC } from 'react'
import bannerImage1 from '../../public/image/banner1.png'
import bannerImage2 from '../../public/image/banner2.jpg'
import bannerImage3 from '../../public/image/banner3.jpg'
import Image from 'next/image'
import { Swiper, SwiperSlide, Navigation, Pagination, EffectFade } from '../ui/slider'
const banners = [
    {
        // title: 'Shop Computer & experience',
        // description: `You cannot inspect quality into the product; it is already there.
        // I am not a product of my circumstances. I am a product of my decisions.`,
        image: bannerImage1
    },
    {
        image: bannerImage1
    },
    {
        image: bannerImage1
    }
]

const Banner:FC = () => {
  return (
      <><div
          className='block relative sm:mt-0'
      >
          <div className="-z-1">
              <div className="relative max-w-[1640px] w-full mx-auto">
                  <Swiper
                      id="banner"
                      loop={true}
                      modules={[Navigation, EffectFade, Pagination]}
                      pagination={{ clickable: true }}
                      resizeObserver={true}
                      allowTouchMove={false}
                      slidesPerView={1}
                      effect="fade"
                      speed={2500}
                      autoplay={{
                          delay: 4000,
                          disableOnInteraction: false,
                      }}
                  >
                      {banners &&
                          banners.map((banner: any, index: number) => (
                              <SwiperSlide key={index}>
                                  <div className='relative'>
                                      <div className={`lg:w-[50%] w-full  z-[99] lg:space-s-8 px-4 md:!pl-[65px] md:px-6 lg:px-8 swiper-catch`}>
                                          <div className="slider__content md:block hidden">
                                              <h1 className="lg:text-[57px] md:text-[45px] text-[20px] font-normal md:leading-[53px] leading-[25px] mb-[8px] text-[#0AAEB9] capitalize slider__maintitle">
                                                    <span className='text-[#000]'>Shop</span> Computer & experience
                                              </h1>
                                              <p className='mb-2 capitalize text-[15px]'>You cannot inspect quality into the product; it is already <br /> there. <br />
                                                I am not a product of my circumstances. I am a product of <br /> my decisions.</p>
                                                <a
                                                    className="md:w-[168px] w-[100px] cursor-pointer tracking-widest flex items-center justify-center bg-[#14B1F0] text-[#fff] hover:bg-dark lg:text-[16px] text-[14px] font-bold lg:p-[12px] md:p-[8px] p-[6px] rounded-[5px]"
                                                //   onClick={() => }
                                                >
                                                    View More
                                                </a>
                                          </div>
                                      </div>
                                      <div className="relative">
                                        <div className='nextimg_wrapper relative'>
                                            <Image
                                                priority
                                                className="next_img"
                                                src={banner.image}
                                                alt={banner.title}
                                                title={banner.title}
                                                layout="fill"
                                            />
                                        </div>
                                        <div className='absolute top-[30px] right-[138px] flex items-center justify-center w-[165px] h-[159px] rounded-[83px] text-[47px] font-normal text-[#fff] leading-[58px] text-center hero_bnr_sticker'>
                                            40% <br />
                                            Off
                                          </div>
                                      </div>
                                  </div>
                              </SwiperSlide>
                          ))}
                  </Swiper>
              </div>
          </div>
      </div>
    </>
  )
}

export default Banner