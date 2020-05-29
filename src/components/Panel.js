import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PanelName from "../components/PanelName";
import AsanasGridBlock from "../components/AsanasGridBlock";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import clsx from "clsx";
import "./Panel.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 2, 3),
    height: "100%",
  },
  buttonsPanelWrapper: {
    [theme.breakpoints.down("sm")]: {
      maxHeight: 0,
      transition: "max-height 500ms, visibility 0ms 500ms",
      visibility: "hidden",
      paddingRight: theme.spacing(6),
    },
    position: "relative",
  },
  buttonsPanelVisible: {
    maxHeight: "500px",
    transition: "max-height 500ms",
    visibility: "visible",
  },
  PanelFlexElement: {
    overflowY: "scroll",
    scrollBehavior: "smooth",
    marginLeft: "-10px",
    paddingLeft: "10px",
    flexGrow: 3,
    marginTop: theme.spacing(2),
  },
  upArrowButton: {
    [theme.breakpoints.up("md")]: {
      visibility: "hidden",
    },
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

export default function Panel(props) {
  const {
    asanas,
    onChangePanelNameAction,
    onBlurPanelNameAction,
    startCardDragAction,
    startGridDragAction,
    onDragIconMouseDownAction,
    onDragIconMouseUpAction,
    addAsanaAction,
    dragEnterAction,
    onDragEnterEmptySpaceAction,
    onDragEnterHolderAction,
    closeCardAction,
    closeGridAction,
    dragEnterGridAction,
    onDragEnterGridPhAction,
    onChangeGridNameAction,
    onBlurGridNameAction,
    draggingGrid,
    panelDefaultName,
    panelName,
    cards,
    draggingCard,
    dragOverCard,
    dragOverGrid,
    fastTransition,
    dragSourceGrid,
    dragSourcePanelIsSchedule,
    gridHeight,
    gridDefaultName,
    buttonsPanel,
    wrapperClassName,
    itIsSchedulePanel,
    selectedGroupId,
    onGridBlockScroll,
    menuButtonAction,
    openMenu,
    closeMenuAction,
  } = props;

  const classes = useStyles();
  const onDragOverFunc =
    draggingGrid !== null
      ? (e) => {
          e.preventDefault();
        }
      : () => {};

  return (
    <div className={"Panel " + wrapperClassName} onDragOver={onDragOverFunc}>
      <Paper className={classes.root}>
        <div className="PanelFlexBox">
          <div className="PanelNameWraper">
            <PanelName
              name={panelName === null ? panelDefaultName : panelName}
              onChangePanelNameAction={onChangePanelNameAction}
              onBlurPanelNameAction={onBlurPanelNameAction}
              readOnly={!itIsSchedulePanel}
              menuButtonAction={menuButtonAction}
            />
          </div>
          <ClickAwayListener
            onClickAway={closeMenuAction}
            mouseEvent={openMenu ? "onClick" : false}
          >
            <div
              className={clsx(
                classes.buttonsPanelWrapper,
                openMenu && classes.buttonsPanelVisible
              )}
            >
              {buttonsPanel}
              <IconButton
                className={classes.upArrowButton}
                onClick={closeMenuAction}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
            </div>
          </ClickAwayListener>
          <div className={classes.PanelFlexElement}>
            <AsanasGridBlock
              cards={cards}
              draggingCard={draggingCard}
              dragOverCard={dragOverCard}
              dragOverGrid={dragOverGrid}
              fastTransition={fastTransition}
              dragSourceGrid={dragSourceGrid}
              dragSourcePanelIsSchedule={dragSourcePanelIsSchedule}
              asanas={asanas}
              itIsSchedulePanel={itIsSchedulePanel}
              startCardDragAction={startCardDragAction}
              startGridDragAction={startGridDragAction}
              onDragIconMouseDownAction={onDragIconMouseDownAction}
              onDragIconMouseUpAction={onDragIconMouseUpAction}
              addAsanaAction={addAsanaAction}
              dragEnterAction={dragEnterAction}
              onDragEnterEmptySpaceAction={onDragEnterEmptySpaceAction}
              onDragEnterHolderAction={onDragEnterHolderAction}
              closeCardAction={closeCardAction}
              closeGridAction={closeGridAction}
              draggingGrid={draggingGrid}
              gridHeight={gridHeight}
              dragEnterGridAction={dragEnterGridAction}
              onDragEnterGridPhAction={onDragEnterGridPhAction}
              onChangeGridNameAction={onChangeGridNameAction}
              onBlurGridNameAction={onBlurGridNameAction}
              gridDefaultName={gridDefaultName}
              selectedGroupId={selectedGroupId}
              onGridBlockScroll={onGridBlockScroll}
            />
          </div>
        </div>
      </Paper>
    </div>
  );
}
