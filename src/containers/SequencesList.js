import React from "react";
import { connect } from "react-redux";
import {
  closeSeqListAction,
  onChangeSaveNameAction,
  onClickSequenceSaveAction,
  onClickSequenceLoadAction,
  onClickDeleteSequenceAction,
  deleteSequenceAction,
  onClickSaveSequenceAction,
  onClickLoadSequenceAction,
  rewriteSequenceAction,
} from "../actions/SequencesListActions";
import SequencesListSpace from "../components/SequencesListSpace";
import { MODE_SAVE, MODE_LOAD } from "../reducers/sequences";

function SequencesList(props) {
  var texts, onClickSequenceAction, onClickMainButtonAction;
  if (props.sequences.mode === MODE_SAVE) {
    texts = props.sequences.textsSave[props.language.curLang];
    onClickSequenceAction = props.onClickSequenceSaveAction;
    onClickMainButtonAction = () => {
      props.onClickSaveSequenceAction(
        props.user.login,
        props.user.password,
        props.sequences.seqName,
        props.sequences.sequences,
        props.schedule.cards,
        props.rewriteSequenceAction
      );
    };
  } else if (props.sequences.mode === MODE_LOAD) {
    texts = props.sequences.textsLoad[props.language.curLang];
    onClickSequenceAction = props.onClickSequenceLoadAction;
    onClickMainButtonAction = () => {
      props.onClickLoadSequenceAction(
        props.user.login,
        props.user.password,
        props.sequences.seqName,
        props.sequences.sequences
      );
    };
  } else {
    texts = { header: "", button: "" };
    onClickSequenceAction = () => {};
    onClickMainButtonAction = () => {};
  }

  return (
    <SequencesListSpace
      login={props.user.login}
      password={props.user.password}
      sequences={props.sequences.sequences}
      isOpen={props.sequences.isOpen}
      texts={texts}
      seqName={props.sequences.seqName}
      onChangeSaveNameAction={props.onChangeSaveNameAction}
      closeSeqListAction={() =>
        props.closeSeqListAction(props.sequences.skipClickAway)
      }
      onClickSequenceAction={onClickSequenceAction}
      onClickDeleteSequenceAction={props.onClickDeleteSequenceAction}
      onClickSaveSequenceAction={onClickMainButtonAction}
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
    closeSeqListAction: (skip) => dispatch(closeSeqListAction(skip)),
    onChangeSaveNameAction: (e) => dispatch(onChangeSaveNameAction(e)),
    onClickSequenceSaveAction: (name) =>
      dispatch(onClickSequenceSaveAction(name)),
    onClickSequenceLoadAction: (name, id, login, password) =>
      dispatch(onClickSequenceLoadAction(name, id, login, password)),
    onClickDeleteSequenceAction: (login, password, id) =>
      dispatch(
        onClickDeleteSequenceAction(() =>
          dispatch(deleteSequenceAction(login, password, id))
        )
      ),
    rewriteSequenceAction: (login, password, seqName, cards, deleteId) =>
      dispatch(
        rewriteSequenceAction(login, password, seqName, cards, deleteId)
      ),
    onClickSaveSequenceAction: (
      login,
      password,
      seqName,
      sequences,
      cards,
      rewriteSequenceAction
    ) =>
      dispatch(
        onClickSaveSequenceAction(
          login,
          password,
          seqName,
          sequences,
          cards,
          rewriteSequenceAction
        )
      ),
    onClickLoadSequenceAction: (login, password, seqName, sequences) =>
      dispatch(onClickLoadSequenceAction(login, password, seqName, sequences)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SequencesList);
