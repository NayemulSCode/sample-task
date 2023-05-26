import Image from 'next/image'
import { useGetProductsQuery } from './redux/product/productApi';
import Products from '@/components/product/products';
import CategorySlider from '@/components/category/category-slider';
import Banner from '@/components/banner/banner';

const Home = () => (
       <div>
      <Banner />
      <CategorySlider />
      <Products />

    </div>
  )
export default Home;
