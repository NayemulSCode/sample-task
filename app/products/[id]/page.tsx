'use client'
import React,{FC} from 'react'
import { useRouter } from 'next/navigation';
import { useGetProductQuery } from '../../redux/product/productApi';
import LoadingComponent from '@/components/ui/LoadingComponent';
import ErrorComponent from '@/components/ui/ErrorComponentProps ';
import Image from 'next/image';

const ProductDetailPage:FC = ({ params }:any) => {
    const router = useRouter()
    const { data: productDetails, isLoading, isError, error } = useGetProductQuery(params?.id as string);

    if (isLoading) {
      return <LoadingComponent />;
    }

  if (isError && error) {
    const errorMessage = (error as any).data ? JSON.stringify((error as any).data) : 'An error occurred.';
    const status = (error as any).status || 'Error';
    return <ErrorComponent message={errorMessage} status={status} />;
  }
    if (!productDetails) {
        return null; // or any other fallback UI when productDetails is not available
    }
  const renderStars = () => {
    const stars = [];
    const rating = Math.floor(productDetails.rating?.rate || 0);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="text-gray-400">&#9733;</span>);
      }
    }

    return stars;
  };
  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image 
            src={productDetails.image} 
            alt="Product" 
            // className="w-full h-auto" 
            height={400}
            width={500}
            />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-semibold mb-4">{productDetails.title}</h1>
          {productDetails.rating && (
            <div className="flex items-center mb-4">
              <div className="flex">{renderStars()}</div>
              <p className="text-gray-600 ml-2">{productDetails.rating.count} reviews</p>
            </div>
          )}
          <p className="text-xl font-medium mb-4">${productDetails.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{productDetails.description}</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
            onClick={handleGoBack}
          >
            Back
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage