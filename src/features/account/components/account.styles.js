import { Button } from "react-native-paper";
import styled from "styled-components";

import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff44;
`;

export const AnimationWrapper = styled.View`
  position: absolute;
  width: 100%;
  height: 40%;
  top: 20px;
`;

export const AccountContainer = styled.View`
  padding: ${(props) => props.theme.space.lg};
  background-color: #ffffffaa;
  border-radius: 10px;
  gap: ${(props) => props.theme.space.lg};
  width: 80%;
  margin: 8px 0 10px;
`;

export const AccountButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  border-radius: 10px;
`;

export const AccountTextInput = styled.TextInput`
  padding: ${(props) => props.theme.space.lg};
  background-color: #ccc;
  border-radius: 10px;
  outline: blue;
  font-size: 19px;
`;

export const AccountTextInputContainer = styled.View`
  gap: ${(props) => props.theme.space.lg};
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const Error = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-family: ${(props) => props.theme.fonts.body};
`;
