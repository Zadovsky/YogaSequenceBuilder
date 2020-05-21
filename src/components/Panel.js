import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PanelName from "../components/PanelName";
import AsanasGridBlock from "../components/AsanasGridBlock";
import "./Panel.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 2, 3),
    height: "100%",
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
            />
          </div>
          {buttonsPanel}
          <div className="PanelFlexElement">
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
