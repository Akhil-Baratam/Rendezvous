import React, { useState } from 'react';

const Dropdown = ({value, onChange}) => {
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState('');




  return (
    <div>
      <select id="dropdown" value={value} onChange={onChange}  className=' border-none outline-none' >
        <option className='p-1' value="">no. of Participants</option>
        <option className='p-1' value="option1">less than 5</option>
        <option className='p-1' value="option2">less than 10</option>
        <option className='p-1' value="option3">more than 10</option>
      </select>
    </div>
  );
};

export default Dropdown;
