import styled from 'styled-components';

const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  transition: opacity 0.25s ease;
  overflow: hidden;
  z-index: 1;
`;

const ModalInner = styled.div`
  transition: top 0.25s ease;
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
