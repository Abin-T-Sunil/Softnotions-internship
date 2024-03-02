import React, { useState } from "react";
import XLSX from "xlsx"; // Import SheetJS library
import InputField from "../components/InputField";
import RadioGroup from "../components/RadioGroup";
import CheckboxGroup from "../components/CheckboxGroup";
import "./styles.css";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [level, setLevel] = useState("");
  const [gender, setGender] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // Form validation
    if (!name || !age || !level || gender.length === 0) {
      setError("Please fill out all required fields.");
      return;
    }

    // Prepare data for Excel
    const data = [[name, age, level, gender.join(", ")]];
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    // Generate Excel file
    XLSX.writeFile(wb, "user_data.xlsx");
    setError(""); // Reset error message
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1> Form </h1>
        <InputField
          label="Name"
          value={name}
          onChange={setName}
          required
          fieldType="name"
        />
        <InputField
          label="Age"
          value={age}
          onChange={setAge}
          required
          fieldType="age"
        />
        <RadioGroup
          label="Level"
          options={["Beginner", "Intermediate", "Advanced"]}
          value={level}
          onChange={setLevel}
          required
        />
        <CheckboxGroup
          label="Gender"
          options={["Male", "Female", "Other"]}
          value={gender}
          onChange={setGender}
          required
        />
        <button onClick={handleSubmit}>Submit</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default App;
