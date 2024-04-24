import React from 'react'

const Profile = () => {
  return (
    <div className="my-account__edit-form">
              <form name="account_edit_form" className="needs-validation" novalidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-floating my-3">
                      <input type="text" className="form-control" id="account_first_name" placeholder="First Name" required/>
                      <label for="account_first_name">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating my-3">
                      <input type="text" className="form-control" id="account_last_name" placeholder="Last Name" required/>
                      <label for="account_last_name">Last Name</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input type="text" className="form-control" id="account_display_name" placeholder="Display Name" required/>
                      <label for="account_display_name">Display Name</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input type="email" className="form-control" id="account_email" placeholder="Email Address" required/>
                      <label for="account_email">Email Address</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="my-3">
                      <h5 className="text-uppercase mb-0">Password Change</h5>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input type="password" className="form-control" id="account_current_password" placeholder="Current password" required/>
                      <label for="account_current_password">Current password</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input type="password" className="form-control" id="account_new_password" placeholder="New password" required/>
                      <label for="account_new_password">New password</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input type="password" className="form-control" data-cf-pwd="#account_new_password" id="account_confirm_password" placeholder="Confirm new password" required/>
                      <label for="account_confirm_password">Confirm new password</label>
                      <div className="invalid-feedback">Passwords did not match!</div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="my-3">
                      <button className="btn btn-primary">Save Changes</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
  )
}

export default Profile