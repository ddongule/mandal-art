import styled from 'styled-components';

const InputWrapper = styled.div`
  input {
    width: 8rem;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-right: 0.3rem;
    background: ${({ isFocus }) => (isFocus ? 'var(--white)' : 'var(--black)')};
    color: ${({ isFocus }) => (isFocus ? 'var(--black)' : 'var(--baemint)')};
    outline: 0;
    cursor: pointer;

    &::placeholder {
      color: white;
      opacity: 0.5;
    }

    &:focus {
      background: var(--white);
      color: var(--black);
      outline: 0;

      &::placeholder {
        color: transparent;
      }
    }
  }
`;

export default InputWrapper;
