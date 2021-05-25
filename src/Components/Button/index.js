import ButtonWrapper from './index.styles';

function Button({ onClick, children }) {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
}

export default Button;
