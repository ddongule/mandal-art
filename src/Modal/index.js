import { ModalWrapper, ModalInner } from './index.styles';

function Modal({ handleModalClose, children }) {
  const onClickModalDimmed = (e) => {
    console.log(e.target, e.currentTarget);
    if (e.target !== e.currentTarget) return;

    handleModalClose();
  };
  return (
    <ModalWrapper onClick={onClickModalDimmed}>
      <ModalInner>{children}</ModalInner>
    </ModalWrapper>
  );
}

export default Modal;
