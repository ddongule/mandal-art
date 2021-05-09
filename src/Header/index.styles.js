import styled from 'styled-components';

const HeaderWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--white);
  font-family: 'PAYW Pro SemiBold', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 5rem auto 1rem auto;
  position: relative;

  .emoticons {
    display: flex;
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);

    img {
      width: 1rem;
    }

    .heart {
      animation: upDown 0.8s linear 0s infinite alternate;
    }

    .cat {
      animation: upDown 0.8s linear 0s infinite alternate-reverse;

      &:not(:first-child) {
        margin: 0 0.5rem;
      }
    }

    span {
      font-size: 0.7rem;
      height: inherit;
      display: inline-block;
      margin-left: 2px;
    }
  }
  span {
    font-size: inherit;
  }
`;

export default HeaderWrapper;
