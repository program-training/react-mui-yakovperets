import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface MyCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyCheckbox: React.FC<MyCheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          sx={{
            "&.Mui-checked": {
              color: "green",
            },
          }}
        />
      }
      label={label}
    />
  );
};

export default MyCheckbox;
