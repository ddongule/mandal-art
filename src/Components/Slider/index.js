import { SliderWrapper, SliderContainer } from './index.styles';

function Slider({ children }) {
  return (
    <SliderWrapper>
      <SliderContainer>{children}</SliderContainer>
    </SliderWrapper>
  );
}

export default Slider;
