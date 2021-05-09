import { useState } from 'react';
import InputWrapper from './index.styles';

function Input({ handleUserName }) {
  const [isFocus, setIsFocus] = useState(false);

  function onHandleFocusOut({ target }) {
    setIsFocus(false);
    handleUserName(target.value);
  }

  function onHandleFocusOn() {
    setIsFocus(true);
  }

  function resize({ target }) {
    target.style.width = `${target.value.length * 0.6 + 1.65}em`;
  }

  return (
    <InputWrapper>
      <input
        onKeyUp={resize}
        onFocus={onHandleFocusOn}
        onBlur={onHandleFocusOut}
        maxLength='6'
        placeholder='구루는구루밍'
      />
    </InputWrapper>
  );
}

export default Input;
