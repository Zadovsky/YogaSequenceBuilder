import React from "react";
import Chip from "@material-ui/core/Chip";
import "./AsanasNavigation.css";

export default function AsanasNavigation(props) {
  const menuItems = props.groups.map(group => {
    return (
      <Chip
        variant="outlined"
        key={group.id}
        label={group.name}
        onClick={() => {}}
      />
    );
  });
  return <div className="AsanasNavigation">{menuItems}</div>;
}
