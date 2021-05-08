import Button from '../../Button';
import NavWrapper from './index.styles';
import { saveToImage } from '../../utils/util';

function Nav({ name, toggleModal }) {
  return (
    <NavWrapper>
      <Button customClass='save' onClick={() => saveToImage(name)}>
        이미지로 저장하기
      </Button>
      <Button customClass='example-modal' onClick={toggleModal}>
        예시 보기
      </Button>
    </NavWrapper>
  );
}

export default Nav;
