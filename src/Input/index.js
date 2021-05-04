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

  return (
    <InputWrapper>
      <input
        onFocus={onHandleFocusOn}
        onBlur={onHandleFocusOut}
        maxLength='4'
        type='text'
        placeholder='그루밍'
      />
    </InputWrapper>
  );
}

export default Input;
