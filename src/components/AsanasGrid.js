import React from "react";
import AsanasGridWrapper from "../components/AsanasGridWrapper";
import Paper from "@material-ui/core/Paper";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import AsanaCard from "./AsanaCard";
import CardPlaceHolder from "./CardPlaceHolder";
import EmptySpaceAtTheEnd from "./EmptySpaceAtTheEnd";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import yellow from "@material-ui/core/colors/yellow";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import clsx from "clsx";
import "./AsanasGrid.css";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 1, 2, 0),
    position: "relative",
    backgroundColor: yellow[50],
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 1, 1, 0),
    },
  },
  button: {
    position: "absolute",
    right: 0,
    top: 0,
    [theme.breakpoints.down("sm")]: {
      opacity: "70% !important",
    },
  },
  textField: {
    margin: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 1, 1),
    },
  },
  asanasGrid: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "30px",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "20px",
    },
  },
}));

function makeCardsArr(props) {
  const {
    asanas,
    startCardDragAction,
    addAsanaAction,
    closeCardAction,
    gridId,
    draggingCard,
    dragEnterAction,
    dragSourceGrid,
    dragSourcePanelIsSchedule,
    itIsSchedulePanel,
  } = props;
  return asanas.map((asana, i) => {
    const asanaIndex = itIsSchedulePanel ? i : asana.asanaIndex;

    return (
      <AsanaCard
        name={asana.asanaName}
        img={asana.asanaImg}
        key={asana.cardKey}
        isDragging={
          draggingCard === null ||
          dragSourceGrid !== gridId ||
          !itIsSchedulePanel ||
          !dragSourcePanelIsSchedule
            ? false
            : i === draggingCard
        }
        itIsSchedulePanel={itIsSchedulePanel}
        startCardDragAction={() => {
          startCardDragAction(asanaIndex, gridId);
        }}
        dragEnterAction={() => {
          dragEnterAction(asanaIndex, gridId);
        }}
        addAsanaAction={() => {
          addAsanaAction(asanaIndex, gridId);
        }}
        closeCardAction={() => {
          closeCardAction(asanaIndex, gridId);
        }}
      />
    );
  });
}

function makeCardsHoldersArr(cardsArr, props) {
  const {
    dragOverCard,
    dragOverGrid,
    onDragEnterHolderAction,
    gridId,
    fastTransition,
    draggingCard,
  } = props;

  var cardsHoldersArr = [];

  cardsArr.forEach((card, i) => {
    const placeHolder = (
      <CardPlaceHolder
        key={"ph" + i}
        fat={dragOverCard === i && dragOverGrid === gridId}
        fastTransition={fastTransition}
        isDragEnd={draggingCard == null}
        onDragEnterHolderAction={() => onDragEnterHolderAction(i, gridId)}
      />
    );
    cardsHoldersArr.push(placeHolder, card);
  });

  return cardsHoldersArr;
}

export default function AsanasGrid(props) {
  const classes = useStyles();
  const {
    gridId,
    name,
    isDragging,
    itIsSchedulePanel,
    startGridDragAction,
    dragEnterGridAction,
    onDragEnterEmptySpaceAction,
    onDragIconMouseUpAction,
    onDragIconMouseDownAction,
    enableCloseIcon,
    closeGridAction,
    onChangeGridNameAction,
    onBlurGridNameAction,
    scrollIntoView,
  } = props;
  const cardsArr = makeCardsArr(props);
  const cardsHoldersArr = makeCardsHoldersArr(cardsArr, props);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const closeIconButtonProps = {
    size: isSmallScreen ? "small" : undefined,
  };
  const dragIconButtonProps = {
    fontSize: isSmallScreen ? "default" : "large",
  };
  const iconProps = {
    fontSize: isSmallScreen ? "small" : undefined,
  };
  const styles = {
    resize: {
      fontSize: isSmallScreen ? "0.8rem" : undefined,
      height: isSmallScreen ? "0.9rem" : undefined,
      paddingBottom: isSmallScreen ? "4px" : undefined,
    },
  };

  const onDragOverFunc = itIsSchedulePanel
    ? (e) => {
        e.preventDefault();
      }
    : () => {};

  const classStr = clsx(
    "AsanasGridDraggable",
    isDragging && "AsanaGridDragging"
  );

  return (
    <AsanasGridWrapper scrollIntoView={scrollIntoView}>
      <div
        className={classStr}
        draggable="true"
        onDragStart={(e) => {
          startGridDragAction(gridId, e);
        }}
        onDragEnter={() => dragEnterGridAction(gridId)}
        onDragOver={onDragOverFunc}
      >
        <Paper className={classes.root}>
          <div className="TextFieldIconWrapper">
            <TextField
              className={classes.textField}
              value={name}
              inputProps={{
                readOnly: itIsSchedulePanel ? false : true,
                onChange: (e) => onChangeGridNameAction(gridId, e),
                onBlur: onBlurGridNameAction,
                style: styles.resize,
              }}
            />
            {itIsSchedulePanel && <EditIcon {...iconProps} />}
          </div>
          <div className={classes.asanasGrid}>
            {cardsHoldersArr}
            <EmptySpaceAtTheEnd
              onDragEnterEmptySpaceAction={() =>
                onDragEnterEmptySpaceAction(gridId, itIsSchedulePanel)
              }
            />
          </div>
          {itIsSchedulePanel && enableCloseIcon && (
            <div className="closeGridIconDiv">
              <IconButton
                {...closeIconButtonProps}
                className={classes.button}
                onClick={closeGridAction}
              >
                <CloseIcon />
              </IconButton>
            </div>
          )}
          {itIsSchedulePanel ? (
            <div
              className="AsanasGridDragIcon"
              onMouseDown={onDragIconMouseDownAction}
              onMouseUp={onDragIconMouseUpAction}
            >
              <DragIndicatorIcon {...dragIconButtonProps} />
            </div>
          ) : (
            ""
          )}
        </Paper>
      </div>
    </AsanasGridWrapper>
  );
}
