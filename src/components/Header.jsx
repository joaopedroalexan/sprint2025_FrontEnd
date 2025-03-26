import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: "#FF5656" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton
          color="inherit"
          onClick={() => {
            console.log("SE FOR CHORAR MANDA AUDIO ");
          }}
        >
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
