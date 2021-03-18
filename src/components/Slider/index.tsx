import { ISlider } from "./models";
import { SliderWrapper } from "./styles";

export const Slider = ({ value, defaultValue, min, max, step }: ISlider) => {
  return (
    <SliderWrapper>
      <input
        type="range"
        defaultValue={defaultValue}
        value={value}
        min={min}
        max={max}
        step={step}
        className="custom-input"
      />
    </SliderWrapper>
  );
};
