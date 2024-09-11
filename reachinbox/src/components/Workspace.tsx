import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const Workspace = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle function to show/hide the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen); // Debugging state toggle
  };

  return (
    <div className='relative flex justify-center items-center gap-2'>
      {/* Make both the text and icon clickable */}
      <div onClick={toggleDropdown} className='flex items-center gap-2 cursor-pointer'>
        <p className='text-[12px]'>Tim's Workspace</p>
        <span>
          <ChevronDown />
        </span>
      </div>

      {/* Dropdown Options */}
      {isDropdownOpen && (
        <div
          className='absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-40 z-50'
          style={{ display: 'block', backgroundColor: '#f0f0f0' }} // Temp styling
        >
          <ul className='py-2'>
            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Option 1</li>
            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Option 2</li>
            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Workspace;
