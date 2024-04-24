import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'

function ProductList() {
  return (
    <section class="shop-main container">
      

        
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

export default ProductList
