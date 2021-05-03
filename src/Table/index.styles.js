import styled from 'styled-components';

const TableWrapper = styled.div`
  margin: 0.25rem 0;
  padding: 0 0.25rem;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  .boxes {
    display: flex;
    justify-content: center;
    align-items: center;

    .box {
      width: 6rem;
      height: 6rem;
      text-align: center;

      &:focus {
        outline: none;
      }
    }

    input {
      opacity: 0.7;
    }

    .first-first,
    .second-first,
    .third-first {
      border-top: 1px solid var(--gray);
      border-left: 1px solid var(--gray);
      border-right: 1px solid var(--gray);
    }

    .first-second,
    .second-second,
    .third-second,
    .first-third,
    .second-third,
    .third-third {
      border-top: 1px solid var(--gray);
      border-right: 1px solid var(--gray);
    }

    .third-first,
    .third-second,
    .third-third {
      border-bottom: 1px solid var(--gray);
    }

    .second-second {
      color: var(--purple);
      font-size: 1.3rem;
    }
  }
  &:focus-within {
    input {
      opacity: 1;
    }
  }
`;
export default TableWrapper;
