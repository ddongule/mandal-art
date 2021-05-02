import styled from 'styled-components';

const SliderWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 60rem;
  height: 60rem;

  .slider {
    .tables {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

function Slider({ children }) {
  return (
    <SliderWrapper>
      <div>슬라이더</div>
      <div className='slider'>{children}</div>
    </SliderWrapper>
  );
}

export default Slider;
