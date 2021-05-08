import { useCallback, useEffect } from 'react';
import { ModalWrapper, ModalInner } from './index.styles';

function Modal({ modal, toggleModal, children }) {
  const onClickModalDimmed = (e) => {
    if (e.target !== e.currentTarget) return;
    toggleModal();
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && modal.isModalOpen) {
        toggleModal();
      }
    },
    [modal, toggleModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <ModalWrapper onClick={onClickModalDimmed}>
      <ModalInner>{children}</ModalInner>
    </ModalWrapper>
  );
}

export default Modal;
