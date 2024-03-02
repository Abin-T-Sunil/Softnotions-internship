// CheckboxGroup.jsx
import React from "react";

const CheckboxGroup = ({ label, options, value, onChange, required }) => {
  return (
    <div className="checkbox-group">
      <label>{label}</label>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={() => {
              const updatedValue = value.includes(option)
                ? value.filter((item) => item !== option)
                : [...value, option];
              onChange(updatedValue);
            }}
            required={required}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
