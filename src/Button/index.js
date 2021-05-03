import ButtonWrapper from './index.styles';

function Button({ onClickEvent, children }) {
  return <ButtonWrapper onClick={onClickEvent}>{children}</ButtonWrapper>;
}

export default Button;
