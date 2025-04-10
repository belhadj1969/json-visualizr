import React, { useState } from 'react';

const JsonValidator = ({ jsonData }) => {
  const [isValid, setIsValid] = useState(null);

  const validateJson = () => {
    try {
      JSON.stringify(jsonData);
      setIsValid(true);
    } catch (e) {
      setIsValid(false);
    }
  };

  return (
    <div className="json-validator">
      <h2>Validate JSON</h2>
      <button onClick={validateJson}>Validate</button>
      {isValid === null ? null : (
        <div className={isValid ? 'valid' : 'invalid'}>
          {isValid ? 'Valid JSON!' : 'Invalid JSON!'}
        </div>
      )}
    </div>
  );
};

export default JsonValidator;
