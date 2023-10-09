import React from "react";
import Button from "@mui/material/Button";

interface MyButtonProps {
  onClick: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ onClick }) => {
  return (
    <>
      <Button variant="outlined" color="error" onClick={onClick}>
        change
      </Button>
    </>
  );
};

export default MyButton;
