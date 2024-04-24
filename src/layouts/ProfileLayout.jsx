import React from 'react'
import { Outlet , NavLink , Link , useLocation} from 'react-router-dom'

const ProfileLayout = () => {

    const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "menu-link_active" : "";
  };
  return (
    <main>
    <div className="mb-4 pb-4"></div>
    <section className="my-account container">
      <div className="row">
        <div className="col-lg-3">
          <ul className="account-nav">
          <li>
        <Link
          to="/profile/orders"
          className={`menu-link menu-link_us-s ${isActive("/profile/orders")}`}
        >
          Orders
        </Link>
      </li>
      <li>
        <Link
          to="/profile"
          className={`menu-link menu-link_us-s ${isActive("/profile")}`}
        >
          Account Details
        </Link>
      </li>
            <li><Link to="#" className="menu-link menu-link_us-s">Logout</Link></li>
          </ul>
        </div>
        <div className="col-lg-9">
          <div className="page-content my-account__address">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default ProfileLayout