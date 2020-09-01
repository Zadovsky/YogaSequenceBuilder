import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import PanelName from "../components/PanelName";
import AsanasGridBlock from "../components/AsanasGridBlock";
import ButtonsPanelBlock from "../components/ButtonsPanelBlock";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 2, 2),
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1, 1, 1),
    },
  },
  panelFlexElement: {
    overflowY: "scroll",
    scrollBehavior: "smooth",
    marginLeft: "-10px",
    paddingLeft: "10px",
    flexGrow: 3,
  },
  panelFlexBox: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  panel: {
    height: "100%",
  },
  circleUnderMenuButton: {
    display: "flex",
    background: "white",
    opacity: "90%",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    position: "absolute",
    top: 0,
    right: 0,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
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
    openMenuAction,
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
    <div
      className={clsx(classes.panel, wrapperClassName)}
      onDragOver={onDragOverFunc}
    >
      <Paper className={classes.root}>
        <div className={classes.panelFlexBox}>
          <ButtonsPanelBlock
            buttonsPanel={buttonsPanel}
            openMenu={openMenu}
            closeMenuAction={closeMenuAction}
          />
          <div className={classes.panelFlexElement}>
            <PanelName
              name={panelName === null ? panelDefaultName : panelName}
              onChangePanelNameAction={onChangePanelNameAction}
              onBlurPanelNameAction={onBlurPanelNameAction}
              readOnly={!itIsSchedulePanel}
              openMenu={openMenu}
            />
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
          <div className={classes.circleUnderMenuButton}>
            <IconButton
              onClick={openMenu ? closeMenuAction : openMenuAction}
              className={classes.menuButton}
              size="small"
            >
              {openMenu ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </div>
        </div>
      </Paper>
    </div>
  );
}
