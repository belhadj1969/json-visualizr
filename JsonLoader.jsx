import React, { useState } from 'react';

const JsonLoader = ({ onUpload }) => {
  const [url, setUrl] = useState('');

  const fetchJsonFromUrl = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      onUpload(data);
    } catch (error) {
      alert('Failed to fetch JSON data from URL.');
    }
  };

  return (
    <div className="json-loader">
      <h2>Load JSON from URL</h2>
      <input
        type="text"
        placeholder="Enter JSON URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={fetchJsonFromUrl}>Load</button>
    </div>
  );
};

export default JsonLoader;
