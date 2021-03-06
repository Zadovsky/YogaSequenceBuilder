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
import { ActiveListener } from "react-event-injector";
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
  asanasGridDraggable: {
    height: "100%",
    overflow: "hidden",
    marginLeft: "-10px",
    paddingLeft: "10px",
    "& .closeGridIconDiv .MuiButtonBase-root": {
      opacity: 0,
      transition: "200ms",
    },
    "&:hover .closeGridIconDiv .MuiButtonBase-root": {
      opacity: "100%",
      transition: "200ms",
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
    lastDragEnterCard,
    lastDragEnterGrid,
    touchStartAction,
    touchMoveAction,
    touchEndAction,
    touchDnd,
    ghostBlock,
  } = props;
  return asanas.map((asana, i) => {
    const asanaIndex = itIsSchedulePanel ? i : asana.asanaIndex;

    return (
      <AsanaCard
        name={asana.asanaName}
        img={asana.asanaImg}
        key={asana.cardKey}
        isDragging={
          draggingCard === i &&
          dragSourceGrid === gridId &&
          itIsSchedulePanel &&
          dragSourcePanelIsSchedule
        }
        itIsSchedulePanel={itIsSchedulePanel}
        cardPlace={asanaIndex}
        gridId={gridId}
        touchDnd={touchDnd}
        ghostBlock={ghostBlock}
        touchStartAction={(e) =>
          touchStartAction(
            e,
            asanaIndex,
            gridId,
            itIsSchedulePanel,
            "AsanaCard"
          )
        }
        touchMoveAction={touchMoveAction}
        touchEndAction={touchEndAction}
        startCardDragAction={() => {
          startCardDragAction(asanaIndex, gridId);
        }}
        dragEnterAction={
          !(asanaIndex === lastDragEnterCard && gridId === lastDragEnterGrid)
            ? () => {
                dragEnterAction(asanaIndex, gridId);
              }
            : () => {}
        }
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
        onDragEnterHolderAction={onDragEnterHolderAction}
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
    draggingGrid,
    lastDragEnterGrid,
    touchStartAction,
    touchEndAction,
    touchMoveAction,
    ghostBlock,
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
    "AsanasGrid",
    classes.asanasGridDraggable,
    gridId === draggingGrid && itIsSchedulePanel && "AsanaGridDragging"
  );

  return (
    <AsanasGridWrapper scrollIntoView={scrollIntoView}>
      <div
        className={classStr}
        draggable={draggingGrid !== null}
        onDragStart={
          draggingGrid === true
            ? (e) => {
                startGridDragAction(gridId, e);
              }
            : () => {}
        }
        onDragEnter={
          gridId !== lastDragEnterGrid
            ? () => dragEnterGridAction(gridId)
            : () => {}
        }
        onDragOver={onDragOverFunc}
        data-gridid={gridId}
        data-itisschedulepanel={itIsSchedulePanel}
      >
        <Paper className={classes.root}>
          <div className="TextFieldIconWrapper">
            <TextField
              className={classes.textField}
              value={name}
              inputProps={{
                readOnly: !itIsSchedulePanel,
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
                onDragEnterEmptySpaceAction(gridId)
              }
              gridId={gridId}
              itIsSchedulePanel={itIsSchedulePanel}
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
            <ActiveListener onTouchMove={(e) => touchMoveAction(e, ghostBlock)}>
              <div
                className="AsanasGridDragIcon"
                onMouseDown={onDragIconMouseDownAction}
                onMouseUp={onDragIconMouseUpAction}
                onTouchStart={(e) =>
                  touchStartAction(
                    e,
                    null,
                    gridId,
                    itIsSchedulePanel,
                    "AsanasGrid"
                  )
                }
                onTouchEnd={touchEndAction}
              >
                <DragIndicatorIcon {...dragIconButtonProps} />
              </div>
            </ActiveListener>
          ) : (
            ""
          )}
        </Paper>
      </div>
    </AsanasGridWrapper>
  );
}
