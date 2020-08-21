import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  flag: {
    width: "24px",
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      width: "16px",
      marginRight: "4px",
    },
  },
  langName: {
    margin: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.75rem",
    },
  },
  langItemWrapper: {
    display: "flex",
    alignItems: "center",
  },
  menuItem: {
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "2px",
      paddingTop: "0",
    },
  },
  select: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2px",
    },
  },
}));

function makeMenuItemList(langList, classes) {
  var menuItemList = [];

  for (let k in langList) {
    menuItemList.push(
      <MenuItem key={k} value={k}>
        <div className={classes.langItemWrapper}>
          <img src={langList[k].img} alt="flag" className={classes.flag}></img>
          <p className={classes.langName}>{langList[k].name}</p>
        </div>
      </MenuItem>
    );
  }

  return menuItemList;
}

export default function LanguageChooser(props) {
  const classes = useStyles();
  var menuItemList = makeMenuItemList(props.langList, classes);

  return (
    <Select
      value={props.curLang}
      onChange={props.onChangeAction}
      classes={{ root: classes.menuItem }}
      className={classes.select}
    >
      {menuItemList}
    </Select>
  );
}
