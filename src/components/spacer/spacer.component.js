import React from "react";
import styled from "styled-components";

const sizeVariant = {
  small: "sm",
  medium: "md",
  large: "lg",
};

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const getVariant = (size, position, theme) =>
  `${positionVariant[position]}: ${theme.space.sizeVariant[size]}`;

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  postion: "top",
  size: "small",
};
