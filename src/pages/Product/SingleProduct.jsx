import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ImagesSlider from '../../components/ImagesSlider/ImagesSlider';
import RadioOption from '../../components/RadioOption/RadioOption';
import { BsChat, BsMessenger, BsPhone, BsWifi } from 'react-icons/bs';
import Offre from '../../components/Offre/Offre';

function SingleProduct() {
    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("tab-description");
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedVoice, setSelectedVoice] = useState(null);
    const [selectedSms, setSelectedSms] = useState(null);
    const [selectedData, setSelectedData] = useState(null);
  


    const handleOptionChange = (value) => {
      setSelectedOption(value);
    };

    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };
    const handleDecrease = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const handleIncrease = () => {
      setQuantity(quantity + 1);
    };
    const images = [
      {
        id:1,
        src:"../images/products/product_0.jpg"
      },
      {
        id:2,
        src:"../images/products/product_0.jpg"
      },
      {
        id:3,
        src:"../images/products/product_0.jpg"
      },

    ]
  return (
    <>
    <section class="product-single container mt-4">
      <div class="row">
        <div class="col-lg-7">
        <ImagesSlider images={images} />
        </div>
        <div class="col-lg-5">
          <div class="d-flex justify-content-between mb-4 pb-md-2">
            <div class="breadcrumb mb-0 d-none d-md-block flex-grow-1">
              <Link to="/" class="menu-link menu-link_us-s text-uppercase fw-medium">Home</Link>
              <span class="breadcrumb-separator menu-link fw-medium ps-1 pe-1">/</span>
              <Link to="/listproduct" class="menu-link menu-link_us-s text-uppercase fw-medium">The Shop</Link>
            </div>
    
            
          </div>
          <h1 class="product-single__name">Lightweight Puffer Jacket With a Hood id: {id}</h1>
          
          <div class="product-single__price">
            <span class="current-price">$449</span>
          </div>
          <div class="product-single__short-desc">
            <p>Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.</p>
          </div>
          <form name="addtocart-form" method="post">
            <div class="product-single__addtocart">
              <div class="qty-control position-relative">
                <input type="number" name="quantity" value={quantity} min="1" class="qty-control__number text-center"/>
                <div class="qty-control__reduce" onClick={handleDecrease}>-</div>
                <div class="qty-control__increase" onClick={handleIncrease}>+</div>
              </div>
            </div>
          </form>
          
          <div class="product-single__meta-info">
            <div class="meta-item">
              <label>SKU:</label>
              <span>N/A</span>
            </div>
            <div class="meta-item">
              <label>Categories:</label>
              <span>Casual & Urban Wear, Jackets, Men</span>
            </div>
            <div class="meta-item">
              <label>Tags:</label>
              <span>biker, black, bomber, leather</span>
            </div>
          </div>
        </div>
      </div>
      <Offre 
        onVoiceChange={setSelectedVoice} 
        onSmsChange={setSelectedSms} 
        onDataChange={setSelectedData} 
      />
    </section>
    <section class="service-promotion container">
    <div class="row">
      <div class="col-md-4 text-center mb-5 mb-md-0">
        <div class="service-promotion__icon mb-4 theme-color">
          <BsPhone style={{fontSize:'53px'}}/>
        </div>
        <h3 class="service-promotion__title fs-22 fw-bold text-uppercase">Selected Voice: {selectedVoice}</h3>
        <p class="service-promotion__content text-secondary">Voice Offre</p>
      </div>

      <div class="col-md-4 text-center mb-5 mb-md-0">
        <div class="service-promotion__icon mb-4 theme-color">
        <BsChat style={{fontSize:'53px'}}/>
        </div>
        <h3 class="service-promotion__title fs-22 fw-bold text-uppercase">Selected SMS: {selectedSms}</h3>
        <p class="service-promotion__content text-secondary">SMS</p>
      </div>

      <div class="col-md-4 text-center mb-4 pb-1 mb-md-0">
        <div class="service-promotion__icon mb-4 theme-color">
          <BsWifi style={{fontSize:'53px'}}/>
        </div>
        <h3 class="service-promotion__title fs-22 fw-bold text-uppercase">Selected Data :{selectedData} </h3>
        <p class="service-promotion__content text-secondary">Data</p>
      </div>
    </div>
    <button type="submit" style={{width:'100%'}} class="m-4 btn btn-primary btn-addtocart js-open-aside" data-aside="cartDrawer">Add to Cart: Offre Eddawekh</button>

  </section>
  </>
  )
}

export default SingleProduct
