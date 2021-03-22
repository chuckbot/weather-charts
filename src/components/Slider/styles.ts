import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;

  p {
    margin: 0;
  }
  
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

  div.main-box {
    display: flex;
    align-items: center;
  }

  div.value-box {
    position: relative;
    width: 60px;
    min-height: 20px;
    color: #fff;
    line-height: 20px;
    text-align: center;
    border-radius: 3px;
    background: #2c3e50;
    padding: 5px 10px;
    margin-left: 8px;
  }

  div.value-box::after {
    position: absolute;
    top: 8px;
    left: -7px;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-right: 7px solid #2c3e50;
    border-bottom: 7px solid transparent;
    content: '';
  }
`