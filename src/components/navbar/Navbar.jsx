import React from 'react'
import SelectInput from '../SelectInput/SelectInput'
import { BiCart } from 'react-icons/bi'
import { BsBag, BsPerson } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Navbar() {
  const categoryOptions= [
    {
      id:1,
      value:"All Category"
    },
    {
      id:2,
      value:"offre"
    },
    {
      id:3,
      value:"Equipements "
    },
  ]

    const navMenu= [
        {
            title:'Home',
            link:'/',
            childrens :[
                {
                title:'sub home',
                link:'/'
                },
                {
                title:'sub home',
                link:'/'
                },
                {
                title:'sub home',
                link:'/'
                },
                {
                title:'sub home',
                link:'/'
                }
        ]
        },
        {
            title:'About',
            link:'/about'
        }

    ]
  return (
    <header id="header" class="header sticky_disabled header_sticky-bg_dark w-100 theme-bg-color">
    <div class="header-top bordered-20per">
      <div class="container d-flex align-items-center">
        <ul class="list-unstyled d-flex flex-1 gap-3 m-0">
          <li><a href="#" class="menu-link menu-link_us-s fs-13">FAQ</a></li>
          <li><a href="contact.html" class="menu-link menu-link_us-s fs-13">Contact</a></li>
        </ul>
        <div class="heeader-top__right flex-1 d-flex gap-1 justify-content-end">
          <ul class="social-links list-unstyled d-flex flex-wrap mb-0">
            <li>
              <a href="https://facebook.com/" class="footer__social-link d-block">
                <svg class="svg-icon svg-icon_facebook" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_facebook" /></svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" class="footer__social-link d-block">
                <svg class="svg-icon svg-icon_twitter" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_twitter" /></svg>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/" class="footer__social-link d-block">
                <svg class="svg-icon svg-icon_instagram" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_instagram" /></svg>
              </a>
            </li>
            <li>
              <a href="https://pinterest.com/" class="footer__social-link d-block">
                <svg class="svg-icon svg-icon_pinterest" width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_pinterest" /></svg>
              </a>
            </li>
          </ul>
         
          
        </div>
      </div>
    </div>
    <div class="header-desk_type_6 style2">
      <div class="header-middle border-0 position-relative py-4">
        <div class="container d-flex align-items-center">
          <div class="logo">
            <a href="index.html">
              <img src="../images/logo-cars.png" alt="Uomo" class="logo__image" />
            </a>
          </div>

          <nav class="navigation flex-grow-1 fs-15 fw-semi-bold">
            <ul class="navigation__list list-unstyled d-flex">
              {
                navMenu.map((item)=>(
                    <li class="navigation__item">
                        <a href={item.link} class="navigation__link">{item.title}</a>
                        {item.childrens? (
                                <div class="box-menu" style={{width: '800px'}}>
                                    <div class="col pe-4">
                                    <ul class="sub-menu__list list-unstyled">
                                        {item.childrens.map((subItem)=>(
                                            <li class="sub-menu__item"><a href={subItem.link} class="menu-link menu-link_us-s">{subItem.title}</a></li>
                                        ))}
                                    </ul>
                                    </div>
                                </div>
                        ):''}
                    </li>
                ))
              }
            </ul>
          </nav>

          <div class="header-tools d-flex align-items-center me-0">
            <div class="header-tools__item text-white d-none d-xxl-block">
              <span class="fs-15 fw-semi-bold text-uppercase">Need Help? 0020 500</span>
            </div>

            <div class="header-tools__item hover-container">
              <Link class="header-tools__item js-open-aside" to="/auth" data-aside="customerForms">
              <BsPerson  style={{fontSize:'25px'}}/>
              </Link>
            </div>
    
            <a class="header-tools__item" href="account_wishlist.html">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_heart" /></svg>
            </a>
    
            <a href="#" class="header-tools__item header-tools__cart js-open-aside" data-aside="cartDrawer">
              <BsBag style={{fontSize:'25px'}}/>
              <span class="cart-amount d-block position-absolute js-cart-items-count">3</span>
            </a>
          </div>
        </div>
      </div>

      <div class="header-bottom pb-4 mb-2">
        <div class="container d-flex align-items-center">
          <div class="categories-nav position-relative">
            <h3 class="categories-nav__title d-flex align-items-center gap-4 py-2 btn-50 theme-bg-color-secondary text-primary px-4 border-radius-10">
              <svg class="nav-icon" width="25" height="18" viewBox="0 0 25 18" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_nav"/>
              </svg>
              <span class="fw-semi-bold lh-1">Browse Categories</span>
              <svg class="ms-auto" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href="#icon_down"/>
              </svg>
            </h3>
            <ul class="categories-nav__list list-unstyled border-radius-10">
              <li class="categories-nav__item"><a class="text-primary" href="#">Electronics</a></li>
              <li class="categories-nav__item"><a class="text-primary" href="#">Computers</a></li>
              <li class="categories-nav__item"><a class="text-primary" href="#">Audio & Video</a></li>
              <li class="categories-nav__item"><a class="text-primary" href="#">Mobiles & Tablets</a></li>
              <li class="categories-nav__item"><a class="text-primary" href="#">TV & Audio</a></li>
              <li class="categories-nav__item"><a class="text-primary" href="#">Car & Motorbike</a></li>
              <li class="categories-nav__item"><a class="text-primary" href="#">Hmoe & Garden</a></li>
              <li class="categories-nav__item"><a class="text-primary" href="#">Toys & Kids</a></li>
              <li class="categories-nav__item"><a class="text-primary" href="#">Sporting Goods</a></li>
              <li class="categories-nav__item"><a class="text-primary" href="#">Pet Supplies</a></li>
            </ul>
          </div>

          <form action="/search-product" method="GET" class="header-search search-field me-0 border-radius-10">
            <button class="btn header-search__btn" type="submit">
              <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search" /></svg>
            </button>
            <input class="header-search__input w-100" type="text" name="searchKeyword" placeholder="Search products..."/>
            <SelectInput options={categoryOptions}/>
          </form>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar
