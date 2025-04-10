import React from 'react';

const JsonDownload = ({ jsonData }) => {
  const downloadJson = () => {
    const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="json-download">
      <h2>Download JSON</h2>
      <button onClick={downloadJson}>Download</button>
    </div>
  );
};

export default JsonDownload;
