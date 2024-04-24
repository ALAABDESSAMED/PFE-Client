import React ,{useState} from 'react'
import SelectInput from '../../SelectInput/SelectInput'


function Registre() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (event) => {
    setPhoneNumber(event.target.value);}
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

  return (
    <div class="tab-pane fade show active" id="tab-item-register" role="tabpanel" aria-labelledby="register-tab">
          <div class="register-form">
            <form name="register-form" class="needs-validation" novalidate>
              <div class="form-floating mb-3">
                <input name="register_username" type="text" class="form-control form-control_gray" id="customerNameRegisterInput" placeholder="Username" required/>
                <label for="customerNameRegisterInput">Username</label>
              </div>
    
              <div class="pb-3"></div>

              <div class="form-floating mb-3">
                <input name="register_email" type="email" class="form-control form-control_gray" id="customerEmailRegisterInput" placeholder="Email address *" required/>
                <label for="customerEmailRegisterInput">Email address *</label>
              </div>
    
              <div class="pb-3"></div>
    
              <div class="form-floating mb-3">
                <input name="register_password" type="password" class="form-control form-control_gray" id="customerPasswodRegisterInput" placeholder="Password *" required/>
                <label for="customerPasswodRegisterInput">Password *</label>
              </div>
              <div class="form-floating mb-3">
                <input name="register_username" type="text" class="form-control form-control_gray" id="customerNameRegisterInput" placeholder="Username" required/>
                <label for="customerNameRegisterInput">Adresse</label>
              </div>
              <div class="form-floating mb-3">
                <input name="Number" type="text" class="form-control form-control_gray" id="customerNameRegisterInput" placeholder="NUmber" required/>
                <label for="customerNameRegisterInput">Number</label>
              </div>
              <div class="form-floating mb-3">
              <SelectInput options={categoryOptions}/>

              </div>
              

    
              <div class="d-flex align-items-center mb-3 pb-2">
                <p class="m-0">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
              </div>
    
              <button class="btn btn-primary w-100 text-uppercase" type="submit">Register</button>
            </form>
          </div>
        </div>
  )
}

export default Registre
