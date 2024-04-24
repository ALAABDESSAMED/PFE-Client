import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div class="tab-pane fade show active" id="tab-item-login" role="tabpanel" aria-labelledby="login-tab">
          <div class="login-form">
            <form name="login-form" class="needs-validation" novalidate>
              <div class="form-floating mb-3">
                <input name="login_email" type="email" class="form-control form-control_gray" id="customerNameEmailInput1" placeholder="Email address *" required/>
                <label for="customerNameEmailInput1">Email address *</label>
              </div>
    
              <div class="pb-3"></div>
    
              <div class="form-floating mb-3">
                <input name="login_password" type="password" class="form-control form-control_gray" id="customerPasswodInput" placeholder="Password *" required/>
                <label for="customerPasswodInput">Password *</label>
              </div>
    
              <div class="d-flex align-items-center mb-3 pb-2">
                <div class="form-check mb-0">
                  <input name="remember" class="form-check-input form-check-input_fill" type="checkbox" value="" id="flexCheckDefault1"/>
                  <label class="form-check-label text-secondary" for="flexCheckDefault1">Remember me</label>
                </div>
                <a href="reset_password.html" class="btn-text ms-auto">Lost password?</a>
              </div>
    
              <button class="btn btn-primary w-100 text-uppercase" type="submit">Log In</button>
    
              <div class="customer-option mt-4 text-center">
                <span class="text-secondary">No account yet?</span>
                <Link to="/auth/register" class="btn-text js-show-register">Create Account</Link>
              </div>
            </form>
          </div>
        </div>
  )
}

export default Login
