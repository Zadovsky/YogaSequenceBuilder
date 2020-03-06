import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

export default function UserMenu(props) {
  return (
    <div className="UserMenu">
      <Button onClick={props.usernameClickAction}>{props.login}</Button>
      <Menu
        anchorEl={props.anchorEl}
        open={props.isOpen}
        keepMounted
        onClose={props.userMenuClose}
      >
        <MenuItem key={0} onClick={props.userMenuClose}>
          Сменить пароль
        </MenuItem>
        <MenuItem key={1} onClick={props.exitItemClickAction}>
          Выход
        </MenuItem>
      </Menu>
    </div>
  );
}
