import React from 'react';

const Logo: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="#4CAF50" stroke="#2E7D32" strokeWidth="4" />
    <text x="50%" y="50%" textAnchor="middle" fill="white" fontFamily="Arial" fontSize="24" dy=".3em">
      Logo
    </text>
  </svg>
);

export default Logo;
