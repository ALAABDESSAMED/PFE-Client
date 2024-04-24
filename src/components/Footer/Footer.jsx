import React from 'react'

const Footer = () => {
    const FootMenu  = [
        {title:'Home',
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
        ]

        },
    
    ]
  return (
    <footer class="footer footer_type_1">
    <div class="footer-middle container">
      <div class="row row-cols-lg-5 row-cols-2">
        <div class="footer-column footer-store-info col-12 mb-4 mb-lg-0">
          <div class="logo">
            <a href="index.html">
              <img src="../images/logo.png" alt="Uomo" class="logo__image d-block"/>
            </a>
          </div>
          <p class="footer-address">1418 River Drive, Suite 35 Cottonhall, CA 9622 United States</p>

          <p class="m-0">
            <strong class="fw-medium">sale@uomo.com</strong>
          </p>
          <p>
            <strong class="fw-medium">+1 246-345-0695</strong>
          </p>

          <ul class="social-links list-unstyled d-flex flex-wrap mb-0">
            <li>
              <a href="https://www.facebook.com/" class="footer__social-link d-block">
                <svg class="svg-icon svg-icon_facebook" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_facebook" /></svg>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/" class="footer__social-link d-block">
                <svg class="svg-icon svg-icon_twitter" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_twitter" /></svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" class="footer__social-link d-block">
                <svg class="svg-icon svg-icon_instagram" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_instagram" /></svg>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" class="footer__social-link d-block">
                <svg class="svg-icon svg-icon_youtube" width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg"><path d="M15.0117 1.8584C14.8477 1.20215 14.3281 0.682617 13.6992 0.518555C12.5234 0.19043 7.875 0.19043 7.875 0.19043C7.875 0.19043 3.19922 0.19043 2.02344 0.518555C1.39453 0.682617 0.875 1.20215 0.710938 1.8584C0.382812 3.00684 0.382812 5.46777 0.382812 5.46777C0.382812 5.46777 0.382812 7.90137 0.710938 9.07715C0.875 9.7334 1.39453 10.2256 2.02344 10.3896C3.19922 10.6904 7.875 10.6904 7.875 10.6904C7.875 10.6904 12.5234 10.6904 13.6992 10.3896C14.3281 10.2256 14.8477 9.7334 15.0117 9.07715C15.3398 7.90137 15.3398 5.46777 15.3398 5.46777C15.3398 5.46777 15.3398 3.00684 15.0117 1.8584ZM6.34375 7.68262V3.25293L10.2266 5.46777L6.34375 7.68262Z"/></svg>
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/" class="footer__social-link d-block">
                <svg class="svg-icon svg-icon_pinterest" width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_pinterest" /></svg>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-column footer-menu mb-4 mb-lg-0">
            {FootMenu.map((item)=>(
                <>
                <h6 class="sub-menu__title text-uppercase">{item.title}</h6>
                <ul class="sub-menu__list list-unstyled">
                    {item.childrens.map((subItem)=>(
                    <li class="sub-menu__item"><a href={subItem.link} class="menu-link menu-link_us-s">{subItem.title}</a>
                    </li>

                    ))}
                </ul>
                </>

            ))}
         
        </div>

        

       

        <div class="footer-column footer-newsletter col-12 mb-4 mb-lg-0">
          <h6 class="sub-menu__title text-uppercase">Subscribe</h6>
          <p>Be the first to get the latest news about trends, promotions, and much more!</p>
          <form action="https://uomo-html.flexkitux.com/Demo18/index.html" class="footer-newsletter__form position-relative bg-body">
            <input class="form-control border-white" type="email" name="email" placeholder="Your email address"/>
            <input class="btn-link fw-medium bg-white position-absolute top-0 end-0 h-100" type="submit" value="JOIN"/>
          </form>

          <div class="mt-4 pt-3">
            <strong class="fw-medium">Secure payments</strong>
            <p class="mt-2">
              <img loading="lazy" src="../images/payment-options.png" alt="Acceptable payment gateways"/>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom container">
      <div class="d-block d-md-flex align-items-center">
        <span class="footer-copyright me-auto">©2024 Uomo</span>
        <div class="footer-settings d-block d-md-flex align-items-center">
          <div class="d-flex align-items-center">
            <label for="footerSettingsLanguage" class="me-2 text-secondary">Language</label>
            <select id="footerSettingsLanguage" class="form-select form-select-sm bg-transparent" aria-label="Default select example" name="store-language">
              <option class="footer-select__option" selected>United Kingdom | English</option>
              <option class="footer-select__option" value="1">United States | English</option>
              <option class="footer-select__option" value="2">German</option>
              <option class="footer-select__option" value="3">French</option>
              <option class="footer-select__option" value="4">Swedish</option>
            </select>
          </div>

          <div class="d-flex align-items-center">
            <label for="footerSettingsCurrency" class="ms-md-3 me-2 text-secondary">Currency</label>
            <select id="footerSettingsCurrency" class="form-select form-select-sm bg-transparent" aria-label="Default select example" name="store-language">
              <option selected>$ USD</option>
              <option value="1">£ GBP</option>
              <option value="2">€ EURO</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer