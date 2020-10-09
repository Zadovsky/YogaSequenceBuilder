import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PanelName from "../components/PanelName";
import AsanasGridBlock from "../components/AsanasGridBlock";
import ButtonsPanelBlock from "../components/ButtonsPanelBlock";
import MenuButton from "../components/MenuButton";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 2, 2),
    height: "100%",
    [theme.breakpoints.down("sm")]: {
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
    lastDragEnterCard,
    lastDragEnterGrid,
    touchStartAction,
    touchMoveAction,
    touchEndAction,
    touchDnd,
    ghostBlock,
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
          <div
            className={clsx("PanelFlexElement", classes.panelFlexElement)}
            onScroll={onGridBlockScroll}
          >
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
              lastDragEnterCard={lastDragEnterCard}
              lastDragEnterGrid={lastDragEnterGrid}
              touchStartAction={touchStartAction}
              touchMoveAction={touchMoveAction}
              touchEndAction={touchEndAction}
              touchDnd={touchDnd}
              ghostBlock={ghostBlock}
            />
          </div>
          <MenuButton
            openMenu={openMenu}
            closeMenuAction={closeMenuAction}
            openMenuAction={openMenuAction}
          />
        </div>
      </Paper>
    </div>
  );
}
