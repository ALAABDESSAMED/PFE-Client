import React ,{useState} from 'react'
import RadioOption from '../../components/RadioOption/RadioOption';


function Offre() {
    const [activeTab, setActiveTab] = useState("tab-description");
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
      };
    const OffreData =[
        {
          id:1,
          value:35,
          label:"GO",
        },
        {
          id:2,
          value:45,
          label:"GO",
        },
        {
          id:3,
          value:55,
          label:"GO",
        },
        {
          id:4,
          value:65,
          label:"GO",
        },
        {
          id:5,
          value:75,
          label:"GO",
        }
       ];
       const OffreVoice =[
        {
          id:1,
          value:25,
          label:"Min/Mil",
        },
        {
          id:2,
          value:60,
          label:"Min/Mil",
        },
        {
          id:3,
          value:75,
          label:"Min/Mil",
        },
        {
          id:4,
          value:2935,
          label:"Min/Mil",
        }
       ];
       const OffreSms =[
        {
          id:1,
          value:22,
          label:"sms/gratuit",
        },
        {
          id:2,
          value:55,
          label:"sms/gratuit",
        },
        {
          id:3,
          value:125,
          label:"sms/gratuit",
        },
       ]
  return (
    <div className="product-single__details-tab ">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link nav-link_underscore ${activeTab === "tab-description" ? "active" : ""}`}
            id="tab-description-tab"
            onClick={() => handleTabClick("tab-description")}
            style={{cursor:'pointer'}}
            role="tab"
            aria-controls="tab-description"
            aria-selected={activeTab === "tab-description"}
          >
            Data
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link nav-link_underscore ${activeTab === "tab-additional-info" ? "active" : ""}`}
            id="tab-additional-info-tab"
            onClick={() => handleTabClick("tab-additional-info")}
            style={{cursor:'pointer'}}
            role="tab"
            aria-controls="tab-additional-info"
            aria-selected={activeTab === "tab-additional-info"}
          >
            Sms
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link nav-link_underscore ${activeTab === "tab-reviews" ? "active" : ""}`}
            id="tab-reviews-tab"
            onClick={() => handleTabClick("tab-reviews")}
            style={{cursor:'pointer'}}
            role="tab"
            aria-controls="tab-reviews"
            aria-selected={activeTab === "tab-reviews"}
          >
            Voice
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className={`tab-pane fade ${activeTab === "tab-description" ? "show active" : ""}`}
          id="tab-description"
          role="tabpanel"
          aria-labelledby="tab-description-tab"
        >

          <RadioOption options={OffreData}/>
          {/* <div className='row gap-2'>
          <div onClick={()=>handleOptionChange('45')} className={`col-md-3 text-center mb-5 mb-md-0 bg-white shadow-sm rounded-3 ${selectedOption==='45' ? 'border-black':''}`} style={{ cursor: 'pointer' }}>
            <label>
              <input
                type="radio"
                name="promotionOption"
                value="45"
                className='d-none'
                checked={selectedOption === "45"}
                onChange={() => handleOptionChange("45")}
              />
              <h3 className="service-promotion__title fs-22 fw-bold text-uppercase">45</h3>
              <p className="service-promotion__content text-secondary">min/mil</p>
            </label>
          </div>
          <div onClick={()=>handleOptionChange('36')} className={`col-md-3 text-center mb-5 mb-md-0 bg-white shadow-sm rounded-3 ${selectedOption==='36' ? 'border-black':''}`} style={{ cursor: 'pointer' }}>
            <label>
              <input
                type="radio"
                name="promotionOption"
                value="36"
                className='d-none'
                checked={selectedOption === "36"}
                onChange={() => handleOptionChange("36")}
              />
              <h3 className="service-promotion__title fs-22 fw-bold text-uppercase">36</h3>
              <p className="service-promotion__content text-secondary">min/mil</p>
            </label>
          </div>
          </div> */}
        </div>
        <div
          className={`tab-pane fade ${activeTab === "tab-additional-info" ? "show active" : ""}`}
          id="tab-additional-info"
          role="tabpanel"
          aria-labelledby="tab-additional-info-tab"
        >
          <RadioOption options={OffreSms} />
        </div>
        <div
          className={`tab-pane fade ${activeTab === "tab-reviews" ? "show active" : ""}`}
          id="tab-reviews"
          role="tabpanel"
          aria-labelledby="tab-reviews-tab"
        >
                    <RadioOption options={OffreVoice}/>
        </div>
      </div>
    </div>
  )
}

export default Offre
