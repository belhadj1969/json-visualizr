import React, { useState } from 'react';

const JsonTransformer = ({ jsonData, onTransform }) => {
  const [filterKey, setFilterKey] = useState('');

  const handleFilter = () => {
    const filteredData = Object.fromEntries(
      Object.entries(jsonData).filter(([key]) => key.includes(filterKey))
    );
    onTransform(filteredData);
  };

  return (
    <div className="json-transformer">
      <h2>Transform JSON</h2>
      <input
        type="text"
        placeholder="Filter key"
        value={filterKey}
        onChange={(e) => setFilterKey(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default JsonTransformer;
