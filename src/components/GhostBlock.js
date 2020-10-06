import React from "react";
import "./GhostBlock.css";

export default class GhostBlock extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    const {
      startCardDragScheduleAction,
      startCardDragAsanasAction,
      startPanelIsSchedule,
      startCard,
      startGrid,
      mountGhostBlockAction,
      target,
      startGridDragAction,
    } = this.props;

    if (target.classList.contains("AsanaCard")) {
      if (startPanelIsSchedule) {
        startCardDragScheduleAction(startCard, startGrid);
      } else startCardDragAsanasAction(startCard, startGrid);
    } else if (target.classList.contains("AsanasGrid")) {
      startGridDragAction(startGrid, { target: target });
    }

    mountGhostBlockAction(this.ref);
  }

  componentWillUnmount() {
    this.props.endDragCard();
  }

  componentDidUpdate() {
    const {
      moveOnEl,
      dragEnterAction,
      dragEnterCard,
      onDragEnterHolderAction,
      onDragEnterEmptySpaceAction,
      dragEnterGridCardAction,
    } = this.props;

    if (moveOnEl) {
      if (
        moveOnEl.closest(".AsanaCard") &&
        moveOnEl.closest(".AsanaCard").dataset.itisschedulepanel === "true"
      ) {
        const { cardplace, gridid } = moveOnEl.closest(".AsanaCard").dataset;
        dragEnterAction(+cardplace, +gridid);
      } else if (moveOnEl.closest(".CardPlaceHolder")) {
        onDragEnterHolderAction();
      } else if (
        moveOnEl.closest(".EmptySpaceAtTheEnd") &&
        moveOnEl.closest(".EmptySpaceAtTheEnd").dataset.itisschedulepanel ===
          "true"
      ) {
        const { gridid } = moveOnEl.closest(".EmptySpaceAtTheEnd").dataset;
        onDragEnterEmptySpaceAction(+gridid);
      } else if (
        moveOnEl.closest(".AsanasGridDraggable") &&
        moveOnEl.closest(".AsanasGridDraggable").dataset.itisschedulepanel ===
          "true"
      ) {
        const { gridid } = moveOnEl.closest(".AsanasGridDraggable").dataset;
        dragEnterGridCardAction(+gridid);
      } else {
        dragEnterCard({ target: moveOnEl });
      }
    }
  }

  render() {
    const {
      target,
      targetWidth,
      targetHeight,
      targetTop,
      targetLeft,
      dX,
      dY,
    } = this.props;

    if (target) {
      return (
        <div
          className="GhostBlock"
          ref={this.ref}
          style={{
            width: targetWidth,
            height: targetHeight,
            top: targetTop + dY,
            left: targetLeft + dX,
            opacity: "70%",
          }}
          dangerouslySetInnerHTML={{
            __html: target.innerHTML,
          }}
        />
      );
    } else return null;
  }
}
