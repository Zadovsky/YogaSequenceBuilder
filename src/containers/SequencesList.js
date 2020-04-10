import React from "react";
import { connect } from "react-redux";
import {
  closeSeqListAction,
  onChangeSaveNameAction,
  onClickDeleteSequenceAction,
  deleteSequenceAction,
  onClickSaveSequenceAction,
  rewriteSequenceAction,
} from "../actions/SequencesListActions";
import SequencesListSpace from "../components/SequencesListSpace";

function SequencesList(props) {
  return (
    <SequencesListSpace
      login={props.user.login}
      password={props.user.password}
      sequences={props.sequences.sequences}
      isOpen={props.sequences.isOpen}
      texts={props.sequences.textsSave[props.language.curLang]}
      saveName={props.sequences.saveName}
      onChangeSaveNameAction={props.onChangeSaveNameAction}
      closeSeqListAction={props.closeSeqListAction}
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
