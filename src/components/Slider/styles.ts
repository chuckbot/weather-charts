import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  input.custom-input {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    background: gray;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;

    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: none;
      background: black;
      width: 16px;
      height: 16px;
      cursor: pointer;
      border-radius: 50%;
    }
  }
`