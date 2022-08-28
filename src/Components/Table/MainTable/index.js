import styled from 'styled-components';
import Table from '../index';

const MainTableWrapper = styled.div`
  opacity: 1;

  .boxes {
    visibility: visible;

    /* .hide-input {
      opacity: 1;
      background: var(--white);

      & > .second-second::placeholder {
        font-size: 1.5rem;
        color: var(--red);
      }
    } */
  }
`;

function MainTable({ addMainInput }) {
  return (
    <MainTableWrapper>
      <Table tableKey={'main'} customClass='main' addMainInput={addMainInput} main={true} />
    </MainTableWrapper>
  );
}

export default MainTable;
