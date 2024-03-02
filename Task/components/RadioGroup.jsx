// RadioGroup.jsx
import React from "react";

const RadioGroup = ({ label, options, value, onChange, required }) => {
  return (
    <div className="radio-group">
      <label>{label}</label>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
            required={required}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
