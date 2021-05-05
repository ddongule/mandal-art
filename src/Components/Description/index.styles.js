import styled from 'styled-components';

const DescriptionWrapper = styled.div`
  max-width: 60rem;
  color: white;
  padding: 0 4rem;
  font-weight: 200;
  margin: 4rem auto 1rem auto;
`;

const MainWrapper = styled.div`
  vertical-align: middle;
  align-items: center;
  display: flex;
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 1rem;

  span {
    display: inline-block;
  }

  .content {
    background: #ffffff2e;
    border-radius: 12px;
    padding: 0.5rem;
    margin: 0 0.2rem;
  }

  .title {
    font-size: 1.7rem;
    margin-right: 0.5rem;
    background: linear-gradient(to right, var(--orange) 0%, var(--red) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const ContentWrapper = styled.p`
  font-weight: 400;
  line-height: 1.3;
`;

export { DescriptionWrapper, MainWrapper, ContentWrapper };
