import { useState } from "react";
import { ISlider } from "./models";
import { SliderWrapper } from "./styles";

export const Slider = ({
  value,
  label,
  defaultValue,
  min,
  max,
  step,
  onChangeValue,
}: ISlider) => {
  const [localStorage, setLocalStorage] = useState(value as number);

  const handleSlider = (value: number) => {
    onChangeValue(value);
    setLocalStorage(value);
  };

  return (
    <SliderWrapper>
      <div className="sliderContainer">
        <p>{label}</p>
        <div className="main-box">
          <input
            type="range"
            defaultValue={defaultValue}
            value={localStorage}
            min={min}
            max={max}
            step={step}
            className="custom-input"
            onChange={(event) => handleSlider(parseInt(event.target.value))}
          />
          <div className="value-box">
            <div className="value-display">{localStorage}</div>
          </div>
        </div>
      </div>
    </SliderWrapper>
  );
};
