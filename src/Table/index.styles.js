import styled from 'styled-components';

const TableWrapper = styled.div`
  margin: 1.5rem 0;
  padding: 0 2rem;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  .boxes {
    display: flex;
    justify-content: center;
    align-items: center;

    .box {
      width: 4rem;
      height: 4rem;
      text-align: center;

      &:focus {
        outline: none;
      }
    }

    .first-first,
    .second-first,
    .third-first {
      border-top: 1px solid #cacaca;
      border-left: 1px solid #cacaca;
      border-right: 1px solid #cacaca;
    }

    .first-second,
    .second-second,
    .third-second,
    .first-third,
    .second-third,
    .third-third {
      border-top: 1px solid #cacaca;
      border-right: 1px solid #cacaca;
    }

    .third-first,
    .third-second,
    .third-third {
      border-bottom: 1px solid #cacaca;
    }

    .second-second {
      color: rgba(255, 143, 78, 1);
      font-size: 1.3rem;
    }
  }
`;
export default TableWrapper;
