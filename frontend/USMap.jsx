import React, { useState } from 'react';

const USMap = () => {
  const [selectedState, setSelectedState] = useState(null);

  const getStateColor = (stateId) => {
    return selectedState === stateId ? 'rgb(59, 130, 246)' : 'rgb(229, 231, 235)';
  };

  return (
    <div className="w-full max-w-4xl">
      <div>
        <h1>United States Energy Map</h1>
      </div>
      <div className="relative">
        <svg viewBox="0 0 959 593" className="w-full h-full">
          <g className="states">
            {/* Alaska */}
            <path
              d="M161.1 453.7l-.3 85.4 1.6 1 3.1.2 1.5-1.1h2.6l.2 2.9 7 6.8.5 2.6 4.7 2.6 1.1 2.4-1.1 2.4-1.1 2.9 3.7 6 2.6 3.4 1.6 3.9 1.1 2.9 1.6.8 1.6-1.1 3.7-2.4 1.6-1.6 1.6-1.1 3.1 1.6 3.7 1.1 1.1-1.1.5-1.6-1-3.9-1.6-1.6-1.5-3.7v-3.1l-1.1-2.4 1.1-2.9 2.1-1.6.5-2.1-1.6-1.6-1.5-3.7.5-2.6.5-1.6 1-1.1-1.6-2.6-2.1-1.6-1.6-1.1-2.1-3.1-.5-3.7h-1.1l-1.6 1.6-2.1 1.6-3.1 1.6-3.7.5-2.6-1.6.5-1.6 1.1-1.6v-2.6l-1.6-3.9-4.2-2.9-4.7-2.6-3.1-3.7-5.2-3.7-5.2-3.1"
              style={{ cursor: 'pointer' }}
              fill={getStateColor('AK')}
              stroke="#000"
              strokeWidth="1"
              onClick={() => setSelectedState('AK')}
            />
            
            {/* Add other state paths here */}
          </g>
        </svg>
        
        {selectedState && (
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '1rem', background: 'white', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Selected State: {selectedState}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default USMap;