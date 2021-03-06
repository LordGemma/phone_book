import { connect } from 'react-redux';
import { hideModal } from '../../store/modal';
import { addUser, editUser } from '../../store/users';
import { default as ModalComponent } from '../Components';

const mapStateToProps = state => {
  const { isVisible, isEditMode } = state.modal;
  const { user } = state.users;
  const editedUser = isEditMode ? user : null
  return {
    isVisible,
    editedUser,
    isEditMode,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSave: (data, editMode) => {
      editMode ?
      dispatch(editUser(data))
      : dispatch(addUser(data));
      dispatch(hideModal());
    },
    onHide: () => dispatch(hideModal()),
  }
}

export const Modal = connect(mapStateToProps, mapDispatchToProps)(ModalComponent);