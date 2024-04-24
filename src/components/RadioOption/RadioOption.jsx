import React , { useState } from 'react'

function RadioOption({options}) {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (value) => {
      setSelectedOption(value);
    };
  return (
    <div className='row gap-2'>
        {options.map((option)=>(
        <div  key={option.id} onClick={()=>handleOptionChange(option.value)} className={`col-md-3 text-center mb-5 mb-md-0 bg-white shadow-sm rounded-3 ${selectedOption===option.value ? 'border-black':''}`} style={{ cursor: 'pointer' }}>

<label>
              <input
                type="radio"
                name="promotionOption"
                value={option.value}
                className='d-none'
                checked={selectedOption === option.value}
                onChange={() => handleOptionChange(option.value)}
              />
              <h3 className="service-promotion__title fs-22 fw-bold text-uppercase">{option.value}</h3>
              <p className="service-promotion__content text-secondary">{option.label}</p>
            </label>
          </div>
        ))}
            
          </div>
  )
}

export default RadioOption
