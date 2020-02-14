import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PanelName from "../components/PanelName";
import AsanasGridBlock from "../components/AsanasGridBlock";
import SaveLoadPdfButtons from "../components/SaveLoadPdfButtons";
import "./Panel.css";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2, 3),
    height: "100%"
  }
}));

export default function Panel(props) {
  const {
    asanasArr,
    language,
    onChangePanelNameAction,
    startCardDragAction,
    startGridDragAction,
    onDragIconMouseDownAction,
    onDragIconMouseUpAction,
    addAsanaAction,
    dragEnterAction,
    onDragEnterEmptySpace,
    onDragEnterHolder,
    closeCardAction,
    closeGridAction,
    dragEnterGridAction,
    onDragEnterGridPhAction,
    onChangeGridNameAction,
    draggingGrid,
    isPanelNameDef,
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
    gridDefaultName
  } = props;

  const classes = useStyles();
  const onDragOverFunc =
    draggingGrid !== null
      ? e => {
          e.preventDefault();
        }
      : () => {};
  const asanas = asanasArr.arr.map(asana => {
    return {
      ...asana,
      asanaName: asana.asanaName[language.curLang]
    };
  });

  return (
    <div className="SchedulePanel" onDragOver={onDragOverFunc}>
      <Paper className={classes.root}>
        <div className="SchedulePanelFlexBox">
          <div className="PanelNameWraper">
            <PanelName
              name={
                isPanelNameDef ? panelDefaultName[language.curLang] : panelName
              }
              onChangePanelNameAction={onChangePanelNameAction}
              readOnly={false}
            />
          </div>
          <SaveLoadPdfButtons />
          <div className="SchedulePanelFlexElement">
            <AsanasGridBlock
              cards={cards}
              draggingCard={draggingCard}
              dragOverCard={dragOverCard}
              dragOverGrid={dragOverGrid}
              fastTransition={fastTransition}
              dragSourceGrid={dragSourceGrid}
              dragSourcePanelIsSchedule={dragSourcePanelIsSchedule}
              asanas={asanas}
              itIsSchedulePanel={true}
              startCardDragAction={startCardDragAction}
              startGridDragAction={startGridDragAction}
              onDragIconMouseDownAction={onDragIconMouseDownAction}
              onDragIconMouseUpAction={onDragIconMouseUpAction}
              addAsanaAction={addAsanaAction}
              dragEnterAction={dragEnterAction}
              onDragEnterEmptySpace={onDragEnterEmptySpace}
              onDragEnterHolder={onDragEnterHolder}
              closeCardAction={closeCardAction}
              closeGridAction={closeGridAction}
              draggingGrid={draggingGrid}
              gridHeight={gridHeight}
              dragEnterGridAction={dragEnterGridAction}
              onDragEnterGridPhAction={onDragEnterGridPhAction}
              onChangeGridNameAction={onChangeGridNameAction}
              gridDefaultName={gridDefaultName[language.curLang]}
              selectedGroupId={null}
              onGridBlockScroll={() => {}}
            />
          </div>
        </div>
      </Paper>
    </div>
  );
}
