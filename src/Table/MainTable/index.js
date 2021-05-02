import styled from 'styled-components';
import Table from '../index';

const MainTableWrapper = styled.div`
  //   // margin-top: 3rem;
  //   // padding: 0 2rem;

  .boxes {
    visibility: visible;
    .second-second {
      font-size: 1.5rem;
    }
  }
`;

function MainTable({ addMainInput }) {
  return (
    <MainTableWrapper>
      <Table customClass='main' addMainInput={addMainInput} main={true} />
    </MainTableWrapper>
  );
}

export default MainTable;
