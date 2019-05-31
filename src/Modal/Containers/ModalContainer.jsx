import { connect } from 'react-redux';
import { hideModal } from '../../store/modal';
import { default as ModalComponent } from '../Components';

const mapStateToProps = state => {
  const { isVisible } = state.modal;
  return {
    isVisible,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSave: (id) => dispatch(hideModal()),
    onHide: (id) => dispatch(hideModal()),
  }
}

export const Modal = connect(mapStateToProps, mapDispatchToProps)(ModalComponent);