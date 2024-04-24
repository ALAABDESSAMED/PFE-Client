import React from 'react'
import { Link, useParams, useLocation  } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard';

const SearchProduct = () => {
    const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const searchKeyword = queryParams.get('searchKeyword') || '';
  const searchCategory = queryParams.get('searchCategory') || '';

    console.log(searchCategory, searchKeyword)
  return (
    
         <section class="shop-main container">
      <h2 class="page-title fs-35 mb-5">SEARCH RESULTS FOR "{searchKeyword}" (16)</h2>

        
      <div class="products-grid row row-cols-2 row-cols-md-3 row-cols-lg-4" id="products-grid" >
        

        <ProductCard/>
        <ProductCard/>

        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>


        </div>
      
    </section>


   
  )
}

export default SearchProduct