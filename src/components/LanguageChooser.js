import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./LanguageChooser.css";

export default function LanguageChooser(props) {
  return (
    <Select value="ru">
      <MenuItem value="ru">
        <div className="langItemWrapper">
          <img src="/img/rusflag.png" alt="flag"></img>
          <p>Рус</p>
        </div>
      </MenuItem>
      <MenuItem value="en">
        <div className="langItemWrapper">
          <img src="/img/engflag.png" alt="flag"></img>
          <p>Eng</p>
        </div>
      </MenuItem>
    </Select>
  );
}
