import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./LanguageChooser.css";

function makeMenuItemList(langList) {
  var menuItemList = [];

  for (let k in langList) {
    menuItemList.push(
      <MenuItem key={k} value={k}>
        <div className="langItemWrapper">
          <img src={langList[k].img} alt="flag"></img>
          <p>{langList[k].name}</p>
        </div>
      </MenuItem>
    );
  }

  return menuItemList;
}

export default function LanguageChooser(props) {
  var menuItemList = makeMenuItemList(props.langList);

  return (
    <Select value={props.language} onChange={props.onChangeAction}>
      {menuItemList}
    </Select>
  );
}
