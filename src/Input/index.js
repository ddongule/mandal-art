import { useState } from 'react';
import InputWrapper from './index.styles';

function Input({ handleUserName }) {
  const [isFocus, setIsFocus] = useState(false);

  const onHandleFocusOut = ({ target }) => {
    setIsFocus(false);
    handleUserName(target.value);
  };

  const onHandleFocusOn = () => {
    setIsFocus(true);
  };

  const resize = ({ target }) => {
    target.style.width = `${target.value.length * 0.6 + 1.65}em`;
  };

  const onPreventTab = (e) => {
    if (e.keyCode === 9) e.preventDefault();
  };

  return (
    <InputWrapper>
      <input
        onKeyUp={resize}
        onFocus={onHandleFocusOn}
        onBlur={onHandleFocusOut}
        onKeyDown={onPreventTab}
        maxLength='6'
        placeholder='구루는구루밍'
      />
    </InputWrapper>
  );
}

export default Input;
