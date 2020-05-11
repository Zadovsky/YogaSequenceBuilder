import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import "./UserMenu.css";

export default function UserMenu(props) {
  return (
    <div className="UserMenu">
      <Button onClick={props.usernameClickAction}>
        <img src="/img/user.png" alt="user" className="userIcon" />
        {props.login}
      </Button>
      <Menu
        anchorEl={props.anchorEl}
        open={props.isOpen}
        keepMounted
        onClose={props.userMenuClose}
      >
        <MenuItem key={0} onClick={props.changePwdItemClickAction}>
          {props.texts.cnangePwd}
        </MenuItem>
        <MenuItem key={1} onClick={props.exitItemClickAction}>
          {props.texts.exit}
        </MenuItem>
      </Menu>
    </div>
  );
}
