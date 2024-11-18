import React, { useState } from 'react';

const SearchInput = ({ data, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredOptions(data.filter(option =>
      option.title.toLowerCase().includes(value.toLowerCase())
    ));
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSearchTerm(option.title);
    setFilteredOptions([]);
  };

  return (
    <div className="relative mb-4 w-full ">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 poppins-light"
      />
      {filteredOptions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 poppins-light">
          {filteredOptions?.map(option => (
            <li
              key={option?.id}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            >
              {option?.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
