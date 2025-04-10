import React from 'react';

const JsonPreview = ({ jsonData }) => {
  return (
    <div className="json-preview">
      <h2>JSON Preview</h2>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default JsonPreview;
