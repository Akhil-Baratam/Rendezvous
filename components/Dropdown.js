import React from 'react';

const Dropdown = ({ value, onChange }) => {
  return (
    <div className="relative inline-block w-full">
      <select
        id="participants"
        value={value}
        onChange={onChange}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">No. of Participants</option>
        <option value="less than 5">Less than 5</option>
        <option value="less than 10">Less than 10</option>
        <option value="more than 10">More than 10</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;