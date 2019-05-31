export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = isEditMode => ({
  type: SHOW_MODAL,
  payload: {
    isEditMode: isEditMode
  }
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
