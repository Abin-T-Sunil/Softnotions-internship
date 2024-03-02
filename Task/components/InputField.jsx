// InputField.jsx
import React from "react";

const InputField = ({ label, value, onChange, required, fieldType }) => {
  const handleChange = (newValue) => {
    // Validate input based on the field type
    if (fieldType === "name") {
      // Allow only letters and spaces
      newValue = newValue.replace(/[^A-Za-z\s]/gi, "");
    } else if (fieldType === "age") {
      // Allow only numbers
      newValue = newValue.replace(/[^0-9]/g, "");
    }
    onChange(newValue);
  };
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        required={required}
      />
    </div>
  );
};

export default InputField;
