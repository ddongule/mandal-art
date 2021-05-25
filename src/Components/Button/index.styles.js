import styled from 'styled-components';

const ButtonWrapper = styled.button`
  width: 10rem;
  height: 2rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--gray);
  font-weight: 500;
  color: white;
  cursor: pointer;
  color: var(--red);

  &:hover {
    opacity: 0.8;
  }

  &:not(:first-child) {
    margin-left: 1rem;
    color: var(--orange);
  }
`;

export default ButtonWrapper;
