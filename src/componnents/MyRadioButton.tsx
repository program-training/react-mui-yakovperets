import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

interface MyRadioButtonProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyRadioButton: React.FC<MyRadioButtonProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <FormControlLabel
      control={<Radio checked={checked} onChange={onChange} />}
      label={label}
      sx={{ height: "45px" }}
    />
  );
};

export default MyRadioButton;
