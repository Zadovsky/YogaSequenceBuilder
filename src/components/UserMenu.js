import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

export default function UserMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="UserMenu">
      <Button onClick={handleClick}>{props.login}</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        keepMounted
        onClose={handleClose}
      >
        <MenuItem key={0} onClick={handleClose}>
          Сменить пароль
        </MenuItem>
        <MenuItem
          key={1}
          onClick={() => {
            handleClose();
            props.exitItemClickAction();
          }}
        >
          Выход
        </MenuItem>
      </Menu>
    </div>
  );
}
