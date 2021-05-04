import HeaderWrapper from './index.styles';
import Input from '../Input';

function Header({ handleUserName }) {
  return (
    <HeaderWrapper>
      <Input handleUserName={handleUserName} placeholder='' /> 의 만다라트
    </HeaderWrapper>
  );
}

export default Header;
