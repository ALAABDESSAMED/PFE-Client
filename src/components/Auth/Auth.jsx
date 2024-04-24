import React from 'react'
import { Outlet } from 'react-router-dom'

function Auth() {
  return (
    <section class="login-register container">
    <h2 class="d-none">Login & Register</h2>
    <ul class="nav nav-tabs mb-5" id="login_register" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link nav-link_underscore" href="/auth/login" role="tab" aria-controls="tab-item-login" aria-selected="true">Login</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link nav-link_underscore" href="/auth/register" role="tab" aria-controls="tab-item-register" aria-selected="false">Register</a>
      </li>
    </ul>
    <div class="tab-content pt-2" id="login_register_tab_content">
     <Outlet/>
    </div>
  </section>
  )
}

export default Auth
