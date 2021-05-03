import SliderWrapper from './index.styles';

function Slider({ children }) {
  return (
    <SliderWrapper>
      <div className='slider'>{children}</div>
    </SliderWrapper>
  );
}

export default Slider;
