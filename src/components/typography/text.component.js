import styled from "styled-components";

const defaultStyles = (theme) => `
font-family: ${theme.fonts.body};
font-weight: ${theme.fontWeights.regular};
color: ${theme.colors.text.primary};
flex-wrap: wrap;
margin-top: 0px;
margin-bottom: 0px;
`;

const body = (theme) => `font-size: ${theme.fontSizes.body}px`;

const hint = (theme) => `font-size: ${theme.fontSizes.body}px`;

const error = (theme) => `color: ${theme.colors.text.error}`;

const label = (theme) => `
    font-size: ${theme.fontSizes.body}px; 
    font-weight: ${theme.fontWeights.medium}; 
    font-family: ${theme.fonts.heading};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption}px;
    font-weight: ${theme.fontWeights.bold};
`;

const variants = {
  body,
  label,
  hint,
  caption,
  error,
};

// const getVariant = (variant, theme) => `${}`;

export const Text = styled.Text`
  ${({ theme }) => defaultStyles(theme)};
  //   ${({ variant, theme }) => variants[variant](theme)};
`;

Text.defaultProps = {
  variant: "body",
};
