import React from "react";
import "../../styles/Navbar.css"
import HomeIcon from '@mui/icons-material/Home';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
const Navbar = () => {

  return (
    <>
      <div className="Navbar">
        <div className="navbar_content">
          <ul>
            <li>
              <img
                src="https://download.logo.wine/logo/Quora/Quora-Logo.wine.png"
                alt=""
              />
            </li>
            <li><HomeIcon className="icon_size"/></li>
            <li><BookOutlinedIcon  className="icon_size"/></li>
            <li><RateReviewOutlinedIcon  className="icon_size"/></li>
            <li><GroupsIcon  className="icon_size"/></li>
            <li><NotificationsNoneIcon  className="icon_size"/></li>
            <TextField
          label="Search.."
          id="outlined-size-small"
          size="small"
        />
            <li><Avatar/></li>
            <Button variant="outlined">Primary</Button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
