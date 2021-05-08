import styled from 'styled-components';

const ModalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  backdrop-filter: blur(3px);
  transition: all 0.3s ease-in-out;
  z-index: 1;
  animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

const ModalInner = styled.div`
  transition: all 0.3s;
  min-width: 35rem;
  min-height: 35rem;
  margin: auto;
  overflow: auto;
  background: #ffffff;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: relative;
`;

export { ModalWrapper, ModalInner };
