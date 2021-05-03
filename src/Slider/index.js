import SliderWrapper from './index.styles';

function Slider({ children }) {
  return (
    <SliderWrapper>
      <div>슬라이더</div>
      <div className='slider'>{children}</div>
    </SliderWrapper>
  );
}

export default Slider;
