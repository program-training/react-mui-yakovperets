// ExresizeOne.tsx
import React, { useState } from "react";
import MyButton from "../componnents/MyButton";
import MyTextField from "../componnents/MyTextField";
import MyRadioButton from "../componnents/MyRadioButton";
import MySelect from "../componnents/MySelect";
import MyCheckbox from "../componnents/MyCheckbox";
import MyBadge from "../componnents/MyBadge";
import { Typography } from "@mui/material";

const ExresizeOne: React.FC = () => {
  const [buttonValue, setbuttonValue] = useState<boolean>(false);
  const [titleValue, settitleValue] = useState<string>("input your title");
  const [radioValue, setRadioValue] = useState<string>("option1");
  const [selectValue, setSelectValue] = useState<string>("option1");
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);

  const handleButtonClick = () => {
    {
      buttonValue === false && setbuttonValue(true);
      buttonValue === true && setbuttonValue(false);
    }
  };

  return (
    <>
      <Typography variant="h6" component={"h1"}>
        {buttonValue && titleValue}
      </Typography>
      <MyTextField
        value={titleValue}
        onChange={(newValue) => settitleValue(newValue)}
      />
      <MyButton onClick={handleButtonClick} />
      <div>
        <MyRadioButton
          label="boy"
          checked={radioValue === "boy"}
          onChange={() => setRadioValue("boy")}
        />
        <MyRadioButton
          label="girl"
          checked={radioValue === "girl"}
          onChange={() => setRadioValue("girl")}
        />

        <MySelect
          label="state"
          value={selectValue}
          options={["student", "soldeir", "sailor"]}
          onChange={(event) => setSelectValue(event.target.value as string)}
        />

        <MyCheckbox
          label="do you want cookies?"
          checked={checkboxChecked}
          onChange={() => setCheckboxChecked(!checkboxChecked)}
        />
      </div>
      <MyBadge />
    </>
  );
};

export default ExresizeOne;
