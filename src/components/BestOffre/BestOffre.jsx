import React from 'react'

export default function BestOffre() {
  return (

    <section className="banners container py-4">
      <div className="row">
        <div className="col-lg-4">
          <div className="position-relative overflow-hidden border-radius-10">
            <img loading="lazy" src="../images/home/demo18/banner-7.png" width="448" height="235" alt=""/>
            <div className="content_abs content_center text-left container w-100 px-4 mx-3">
              <h3 className="text-uppercase fs-20 fw-semi-bold text-white">NEW ARRIVALS<br/>INTERIOR</h3>
              <a href="shop1.html" className="btn-link default-underline text-uppercase fw-semi-bold text-white fs-13">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="position-relative overflow-hidden border-radius-10">
            <img loading="lazy" src="../images/home/demo18/banner-8.png" width="448" height="235" alt="" />
            <div className="content_abs content_center text-left container w-100 px-4 mx-3">
              <h3 className="text-uppercase fs-20 fw-semi-bold text-white">Engine Services<br/>Up To 20% off</h3>
              <a href="shop1.html" className="btn-link default-underline text-uppercase fw-semi-bold text-white fs-13">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="position-relative overflow-hidden border-radius-10">
            <img loading="lazy" src="../images/home/demo18/banner-9.png" width="448" height="235" alt="" />
            <div className="content_abs content_center text-left container w-100 px-4 mx-3">
              <h3 className="text-uppercase fs-20 fw-semi-bold text-white">CUSTOMIZE<br/>YOUR RIDE</h3>
              <a href="shop1.html" className="btn-link default-underline text-uppercase fw-semi-bold text-white fs-13">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
      )
}
