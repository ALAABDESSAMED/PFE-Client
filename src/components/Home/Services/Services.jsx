import React from 'react'

const Services = () => {
  return (
    <section class="service-promotion horizontal bg-white pt-0 pb-5">
      <div class="container">
        <div class="pb-2"></div>
        <div class="row">
          <div class="col-md-6 col-xl-3 mb-5 mb-xl-0 d-flex align-items-center justify-content-xl-center gap-2">
            <div class="service-promotion__icon">
              <svg class="theme-color" width="45" height="45" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" ><use href="#icon_shipping"></use></svg>
            </div>
            <div class="service-promotion__content-wrap">
              <h3 class="service-promotion__title fs-15 fw-semi-bold text-uppercase mb-1 theme-color">Fast And Free Delivery</h3>
              <p class="service-promotion__content text-secondary mb-0 lh-1">Free delivery for all orders over $140</p>
            </div>
          </div>
          <div class="col-md-6 col-xl-3 mb-5 mb-xl-0 d-flex align-items-center justify-content-xl-center gap-2">
            <div class="service-promotion__icon">
              <svg class="theme-color" width="45" height="45" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_headphone"></use></svg>
            </div>
            <div class="service-promotion__content-wrap">
              <h3 class="service-promotion__title fs-15 fw-semi-bold text-uppercase mb-1 theme-color">24/7 Customer Support</h3>
              <p class="service-promotion__content text-secondary mb-0 lh-1">Friendly 24/7 customer support</p>
            </div>
          </div>
          <div class="col-md-6 col-xl-3 mb-5 mb-xl-0 d-flex align-items-center justify-content-xl-center gap-2">
            <div class="service-promotion__icon">
              <svg class="theme-color" width="45" height="45" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_shield"></use></svg>
            </div>
            <div class="service-promotion__content-wrap">
              <h3 class="service-promotion__title fs-15 fw-semi-bold text-uppercase mb-1 theme-color">Money Back Guarantee</h3>
              <p class="service-promotion__content text-secondary mb-0 lh-1">We return money within 30 days</p>
            </div>
          </div>

          <div class="col-md-6 col-xl-3 mb-5 mb-xl-0 d-flex align-items-center justify-content-xl-center gap-2">
            <div class="service-promotion__icon">
              <svg class="theme-color" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_gift"></use></svg>
            </div>
            <div class="service-promotion__content-wrap">
              <h3 class="service-promotion__title fs-15 fw-semi-bold text-uppercase mb-1 theme-color">Member Gifts</h3>
              <p class="service-promotion__content text-secondary mb-0 lh-1">Discount coupons weekends</p>
            </div>
          </div>
        </div>
        <div class="pb-2"></div>
      </div>
    </section>
  )
}

export default Services