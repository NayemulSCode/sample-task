'use client'
import { useGetCategoriesQuery, useGetCategoryProductsQuery } from "@/app/redux/category/categoriesApi";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CategoryProducts = () => {
    const [categoryName, setCategoryName] = useState<string>('electronics')
    const { data: products, isLoading, isError } = useGetCategoryProductsQuery({
        limit: 5,
        categoryName: categoryName,
    })
    const { data: categories, isLoading:categoryLoagind, isError:categoryError } = useGetCategoriesQuery();
    return (<div className="relative m-auto lg:space-s-8 w-full px-4 twxl_px_none lg:px-7 max-w-[1640px] md:px-5 md:mb-[30px] mb-[20px]">
        <div className="flex flex-wrap justify-between pb-[15px]">
            <h2 className="text-[#333] uppercase md:text-[22px] text-[20px] font_sprn_semibold mb-[0px] text-start"><span className="text-[#15ADB7]">Best</span> Deals</h2>
            <ul className="flex flex-wrap items-center">
                {categories&&categories.map((category:any, index) => (
                    <li key={index}>
                        {/* <span onClick={() => { setCategoryName(category)}} className="my-2 cursor-pointer">
                            {category}
                        </span> */}
                        <span onClick={() => { setCategoryName(category)}} className={
                            "md:text-[#000] text-[19px] md:border-b-2 md:border-transparent md:border-0 border border-[#272723] font-normal uppercase md:pb-2 md:px-0 px-2 md:py-0 block leading-normal ml-[30px] cursor-pointer" +
                            (categoryName ===category
                                ? "md:!text-[#00CAD7] md:bg-transparent bg-[#272723] md:border-b-[#00CAD7] !text-[#00CAD7] border-[#272723] ml-[30px] cursor-pointer"
                                : "")
                            }>
                            {category}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
            <div className="col-span-1 flex flex-col">
                {products &&products.slice(0, 2).map((product, index) => (
                    <Link
                    href="#"
                    key={index}
                    className="product_box1 p-[15px] mb-4"
                    >
                    <div className="flex mb-[10px]">
                        <div className="mr-[15px]">
                            <h6 className="text-[20px] font-normal leading-[30px] text-[#000] mb-[5px] line-clamp-2">{product.title}</h6>
                            <span className="text-[#14B1F0] text-[28px] block">BDT 65,208 </span>
                            <del className="text-[#000]">BDT 66,000</del>
                        </div>
                        <div>
                            <h2 className="font-normal text-[36px] leading-[44px] text-[#000]">
                                <span className="text-[#0AAEB9]">Special <br /></span>Offer
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="mr-[15px]">
                            <div className='flex items-center justify-center md:w-[137px] w-[50px] md:h-[91px] h-[50px] md:text-[24px] text-[16px] font-normal text-[#1A1414] md:leading-[29px] leading-[22px] text-center sticker'>
                                Save<br />
                                10%
                            </div>
                        </div>
                        <div>
                            <Image
                                src={product.image}
                                alt={product.title}
                                height={192}
                                width={120}
                            />
                        </div>
                    </div>
                </Link>
                ))}
            </div>
            <div className="col-span-1 flex flex-col">
                {products &&products.slice(2, 3).map((product:any, index:number) => (
                    <div
                        key={index}
                        className="middle_product p-[15px] mb-4 h-full"
                    >
                        <div className="img_wrapper">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width="100"
                                height={459}
                            />
                        </div>
                        <div className="w-full flex items-center justify-center bg-gray-200">
                            <p>{product.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="col-span-1 flex flex-col">
                {products &&products.slice(3, 5).map((product:any, index:number) => (   
                    <Link
                    href="#"
                    key={index}
                    className="product_box1 p-[15px] mb-4"
                    >
                    <div className="flex mb-[10px]">
                        <div className="mr-[15px]">
                            <h6 className="text-[20px] font-normal leading-[30px] text-[#000] mb-[5px] line-clamp-2">{product.title}</h6>
                            <span className="text-[#14B1F0] text-[28px] block">BDT 65,208 </span>
                            <del className="text-[#000]">BDT 66,000</del>
                        </div>
                        <div>
                            <h2 className="font-normal text-[36px] leading-[44px] text-[#000]">
                                <span className="text-[#0AAEB9]">Special <br /></span>Offer
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="mr-[15px]">
                            <div className='flex items-center justify-center md:w-[137px] w-[50px] md:h-[91px] h-[50px] md:text-[24px] text-[16px] font-normal text-[#1A1414] md:leading-[29px] leading-[22px] text-center sticker'>
                                Save<br />
                                10%
                            </div>
                        </div>
                        <div>
                            <Image
                                src={product.image}
                                alt={product.title}
                                height={192}
                                width={120}
                            />
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    </div>);
};

export default CategoryProducts;
