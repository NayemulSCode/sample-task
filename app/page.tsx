import Image from 'next/image'
import { useGetProductsQuery } from './redux/product/productApi';
import Products from '@/components/product/products';
import CategorySlider from '@/components/category/category-slider';
import Banner from '@/components/banner/banner';
import CategoryProducts from '@/components/best-deals/category-products';
import Header from '@/components/header';

const Home = () => (
       <div>
      <Header />
      <Banner />
      <CategorySlider />
      <Products />
    <CategoryProducts />
    </div>
  )
export default Home;
