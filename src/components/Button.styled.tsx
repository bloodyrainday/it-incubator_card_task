import styled, { css } from "styled-components";

type ButtonPropsType = {
  btnType: "primary" | "outlined";
  color: string;
};

export const Button = styled.button<ButtonPropsType>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;

  ${(props) =>
    props.btnType === "primary" &&
    css<ButtonPropsType>`
      background-color: ${(props) => props.color};
      color: #ffffff;
    `}

  ${(props) =>
    props.btnType === "outlined" &&
    css<ButtonPropsType>`
      background-color: #ffffff;
      color: ${(props) => props.color};
      border: 2px solid ${(props) => props.color};
    `}
`;
