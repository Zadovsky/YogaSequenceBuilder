import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    bullet: {
      margin: theme.spacing(0, 1),
      fontSize: "2.5rem",
      lineHeight: "1rem",
      color: theme.palette.text.primary,
    },
    bulletSelected: {
      color: theme.palette.secondary.main,
    },
    introSliderButtons: {
      display: "flex",
      justifyContent: "center",
      listStyleType: "none",
      margin: 0,
      padding: 0,
    },
  };
});

function createBulletsArr(
  slidersNum,
  curSlide,
  bulletClassName,
  bulletSelectedClassName
) {
  let bulletsArr = [];
  for (let n = 0; n < slidersNum; n++) {
    bulletsArr.push(
      <li
        className={clsx(
          "sliderButton",
          bulletClassName,
          curSlide === n && bulletSelectedClassName
        )}
        key={n}
      >
        &bull;
      </li>
    );
  }
  return bulletsArr;
}

export default function IntroSliderButtons(props) {
  const classes = useStyles();
  const bulletsArr = createBulletsArr(
    props.slidersNum,
    props.curSlide,
    classes.bullet,
    classes.bulletSelected
  );

  return (
    <ul className={clsx("IntroSliderButtons", classes.introSliderButtons)}>
      {bulletsArr}
    </ul>
  );
}
