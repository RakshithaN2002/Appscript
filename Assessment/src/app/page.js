
import React from 'react'
import '../app/page.css';
import ProductCard from '@/components/cards/ProductCard';
import FilterCard from '@/components/cards/FilterCard';
import {products} from '../asset/data.js';

const page = ({}) => {

  return (
    <div className='container'>
      
      
      <h2 className='intro-title'>DISCOVER OUR PRODUCTS</h2>
        <p className='intro-para'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
     

      <hr className='separator'/>

      <div className='main'>
        <div className='subsection-1'>
          <FilterCard title={'IDEAL FOR'}/>
          <FilterCard title={'WORK'}/>
          <FilterCard title={'OCCASION'}/>
          <FilterCard title={'FABRIC'}/>
          <FilterCard title={'SEGMENT'}/>
          <FilterCard title={'SUITABLE FOR'}/>
          <FilterCard title={'RAW MATERIALS'}/>
          <FilterCard title={'PATTERN'}/>
        </div>

        <div className='subsection-2'>
          {products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page