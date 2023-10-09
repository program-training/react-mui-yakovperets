import React from "react";
import TextField from "@mui/material/TextField";

interface MyTextFieldProps {
  value: string;
  onChange: (newValue: string) => void;
}

const MyTextField: React.FC<MyTextFieldProps> = ({ value, onChange }) => {
  return (
    <>
      <TextField
        label="Outlined"
        variant="outlined"
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        sx={{ background: "lightblue" }}
      />
    </>
  );
};

export default MyTextField;
