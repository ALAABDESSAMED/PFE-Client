import React, { useState } from "react";

function SelectInput({options}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Category");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="hover-container position-relative">
      <div className="js-hover__open" onClick={toggleDropdown}>
        <input
          className="header-search__category search-field__actor border-0 bg-white w-100 fw-semi-bold"
          type="text"
          name="searchCategory"
          placeholder="ALL CATEGORY"
          value={selectedCategory}
          readOnly
        />
      </div>
      {isOpen && (
        <div className="header-search__category-list  mt-2" style={{position:"absolute",background:'white'}}>
          <ul className="search-suggestion list-unstyled">
            {options.map((option)=>(
              <li
              className="search-suggestion__item js-search-select"
              onClick={() => handleSelectCategory(option.value)}
            >
              {option.value}
            </li>
            ))}
            
              
            
            
            
            
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectInput;
