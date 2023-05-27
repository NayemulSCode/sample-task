'use client'
import { useGetCategoriesQuery, useGetCategoryProductsQuery } from "@/app/redux/category/categoriesApi";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CategoryProducts = () => {
    const [categoryName ,setCategoryName] = useState<string>('')
    const { data: products, isLoading, isError } = useGetCategoryProductsQuery({
        limit: 5,
        categoryName: categoryName,
    })
    const { data: categories, isLoading:categoryLoagind, isError:categoryError } = useGetCategoriesQuery();
    return (<>
        <div className="grid grid-cols-2">
            <div className="col-span-2 flex flex-col">
                {/* Title */}
                <div className="text-2xl font-bold mb-4">Title</div>
                {/* Categories List */}
                <div className="flex flex-col">
                    {categories&&categories.map((category:any, index) => (
                        <div onClick={() => { setCategoryName(category)}} key={index} className="my-2 cursor-pointer">
                            {category}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 flex flex-col">
                {products &&products.slice(0, 2).map((product, index) => (
                    <div
                        key={index}
                        className="h-288px w-414px flex flex-col items-center"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-2/3 w-full object-cover"
                        />
                        <div className="h-1/3 w-full flex items-center justify-center bg-gray-200">
                            <p>{product.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="col-span-1 flex flex-col">
                {products &&products.slice(2, 3).map((product, index) => (
                    <div
                        key={index}
                        className="h-588px w-414px flex flex-col items-center"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-2/3 w-full object-cover"
                        />
                        <div className="h-1/3 w-full flex items-center justify-center bg-gray-200">
                            <p>{product.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="col-span-1 flex flex-col">
                {products &&products.slice(3, 5).map((product, index) => (
                    <div
                        key={index}
                        className="h-288px w-414px flex flex-col items-center"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-2/3 w-full object-cover"
                        />
                        <div className="h-1/3 w-full flex items-center justify-center bg-gray-200">
                            <p>{product.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>);
};

export default CategoryProducts;
