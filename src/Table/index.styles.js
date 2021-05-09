import styled, { css } from 'styled-components';

const TableWrapper = styled.div`
  margin: 0.25rem 0;
  padding: 0 0.25rem;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: relative;
  font-family: 'PAYW Pro Medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${({ main, centerInput }) => (main ? -1 : centerInput ? -1 : 10)};
    background: var(--background);
    opacity: ${({ main }) => (main ? css`1` : css`0.7`)};
  }

  .boxes {
    display: flex;
    justify-content: center;
    align-items: center;

    .hide-input {
      width: 6rem;
      height: 6rem;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: text;

      span {
        width: 100%;
        max-height: 100%;
        text-align: center;
        overflow: hidden;

        &:focus {
          outline: none;
        }
      }

      &.second-second span[contenteditable] {
        color: ${({ main }) => (main ? css`var(--red)` : css``)};
        font-size: ${({ main }) => (main ? css`1.5rem` : css`1.3rem`)};
      }

      & span[contenteditable]:empty::before {
        content: attr(data-placeholder);
        color: var(--placeholder);
        font-size: 1.125rem;
        opacity: 0.7;
      }
      &.second-second span[contenteditable='true']:empty::before {
        content: attr(data-placeholder);
        color: ${({ main }) => (main ? css`var(--red)` : css`var(--placeholder)`)};
        font-size: ${({ main }) => (main ? css`1.5rem` : css`1.3rem`)};
        opacity: 0.7;
      }

      &.first-first,
      &.second-first,
      &.third-first {
        border-top: 1px solid var(--gray);
        border-left: 1px solid var(--gray);
        border-right: 1px solid var(--gray);
      }

      &.first-second,
      &.second-second,
      &.third-second,
      &.first-third,
      &.second-third,
      &.third-third {
        border-top: 1px solid var(--gray);
        border-right: 1px solid var(--gray);
      }

      &.third-first,
      &.third-second,
      &.third-third {
        border-bottom: 1px solid var(--gray);
      }

      &.second-second {
        color: var(--orange);
        font-size: 1.3rem;
      }
    }

    &:focus-within {
      input {
        opacity: 1;
      }
    }
  }
`;
export default TableWrapper;
