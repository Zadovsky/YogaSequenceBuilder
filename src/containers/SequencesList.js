import React from "react";
import { connect } from "react-redux";
import {
  closeSeqListAction,
  onChangeSaveNameAction,
  onClickSequenceAction,
  onClickDeleteSequenceAction,
  deleteSequenceAction,
  onClickSaveSequenceAction,
  rewriteSequenceAction,
} from "../actions/SequencesListActions";
import SequencesListSpace from "../components/SequencesListSpace";
import { MODE_SAVE, MODE_LOAD } from "../reducers/sequences";

function SequencesList(props) {
  var texts;
  if (props.sequences.mode === MODE_SAVE) {
    texts = props.sequences.textsSave[props.language.curLang];
  } else if (props.sequences.mode === MODE_LOAD) {
    texts = props.sequences.textsLoad[props.language.curLang];
  } else {
    texts = { header: "", button: "" };
  }

  return (
    <SequencesListSpace
      login={props.user.login}
      password={props.user.password}
      sequences={props.sequences.sequences}
      isOpen={props.sequences.isOpen}
      texts={texts}
      saveName={props.sequences.saveName}
      onChangeSaveNameAction={props.onChangeSaveNameAction}
      closeSeqListAction={props.closeSeqListAction}
      onClickSequenceAction={props.onClickSequenceAction}
      onClickDeleteSequenceAction={props.onClickDeleteSequenceAction}
      onClickSaveSequenceAction={() =>
        props.onClickSaveSequenceAction(
          props.user.login,
          props.user.password,
          props.sequences.saveName,
          props.sequences.sequences,
          props.schedule.cards,
          props.rewriteSequenceAction
        )
      }
    />
  );
}

const mapStateToProps = (store) => {
  return {
    language: store.language,
    sequences: store.sequences,
    user: store.user,
    schedule: store.schedule,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeSeqListAction: () => dispatch(closeSeqListAction()),
    onChangeSaveNameAction: (e) => dispatch(onChangeSaveNameAction(e)),
    onClickSequenceAction: (name) => dispatch(onClickSequenceAction(name)),
    onClickDeleteSequenceAction: (login, password, id) =>
      dispatch(
        onClickDeleteSequenceAction(() =>
          dispatch(deleteSequenceAction(login, password, id))
        )
      ),
    rewriteSequenceAction: (login, password, saveName, cards, deleteId) =>
      dispatch(
        rewriteSequenceAction(login, password, saveName, cards, deleteId)
      ),
    onClickSaveSequenceAction: (
      login,
      password,
      saveName,
      sequences,
      cards,
      rewriteSequenceAction
    ) =>
      dispatch(
        onClickSaveSequenceAction(
          login,
          password,
          saveName,
          sequences,
          cards,
          rewriteSequenceAction
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SequencesList);
