import { useCallback, useEffect } from 'react';
import { ModalInner, ModalWrapper } from './index.styles';

function Modal({ children, isOpen, onClickModal, onPressEsc }) {
  const keyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onPressEsc();
      }
    },
    [onPressEsc]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyDown);
    return () => document.removeEventListener('keydown', keyDown);
  }, [keyDown]);

  const onClick = (/** @type {MouseEvent} */ e) => {
    if (e.target === e.currentTarget) {
      onClickModal();
    }
  };

  return (
    <ModalWrapper onClick={onClick} isOpen={isOpen}>
      <ModalInner isOpen={isOpen}>{children}</ModalInner>
    </ModalWrapper>
  );
}

export default Modal;
