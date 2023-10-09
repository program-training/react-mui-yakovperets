// MySelect.tsx
import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

interface MySelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const MySelect: React.FC<MySelectProps> = ({
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={() => onChange}
        label={label}
        sx={{ background: "lightblue" }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MySelect;
