import React, { useState } from 'react';

const Dropdown = ({value, onChange}) => {
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState('');




  return (
    <div>
      <select id="dropdown" value={value} onChange={onChange}  className=' border-none outline-none' >
        <option className='p-1' value="">no. of Participants</option>
        <option className='p-1' value="less than 5">less than 5</option>
        <option className='p-1' value="less than 10">less than 10</option>
        <option className='p-1' value="more than 10">more than 10</option>
      </select>
    </div>
  );
};

export default Dropdown;
