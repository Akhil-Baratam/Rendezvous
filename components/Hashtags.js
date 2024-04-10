import React from 'react'


function Hashtags({ interests, selectedInterest, handleInterestClick }) {
  return (
    <div className="flex gap-2">
    {interests.map((interest) => (
      <button
        key={interest}
        onClick={() => handleInterestClick(interest)}
        className={`bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold ${
          selectedInterest === interest ? 'bg-blue-500 text-white' : ''
        }`}
      >
        {interest}
      </button>
    ))}
  </div>
)
}

export default Hashtags