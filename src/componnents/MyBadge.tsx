import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const MyBadge: React.FC = () => {
  return (
    <Badge
      badgeContent={4}
      color="primary"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      sx={{ fontSize: 30 }}
    >
      <ShoppingCartIcon sx={{ fontSize: 40 }} />
    </Badge>
  );
};

export default MyBadge;
