import React from "react";
import { NavLink } from "react-router-dom";
import menuLogo from "../assets/ascent-logo-white.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

export default function Menu() {
  return (
    <>
      <nav>
        <AppBar sx={{ bgcolor: "#384747", marginBottom: "0px" }}>
          <Toolbar>
            <NavLink to="/">
              <img src={menuLogo} alt="logo" id="menu-logo" />
            </NavLink>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#ffffff",
                  letterSpacing: 4,
                  fontWeight: "300",
                }}
              >
                ASCENT
              </Typography>
            </NavLink>
            <div className="link-container">
              <NavLink to="/about" className="link">
                About
              </NavLink>
              <NavLink to="/packages" className="link">
                Packages
              </NavLink>
              <NavLink to="/workshops" className="link">
                Workshops
              </NavLink>
              <NavLink to="/contact" className="link">
                Contact
              </NavLink>
            </div>
          </Toolbar>
        </AppBar>
      </nav>
    </>
  );
}
