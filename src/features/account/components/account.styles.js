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
  background-color: #00000055;
`;

export const AccountContainer = styled.View`
  padding: ${(props) => props.theme.space.lg};
  background-color: #ffffff55;
  border-radius: 10px;
  gap: ${(props) => props.theme.space.lg};
  width: 80%;
`;

export const AccountButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  border-radius: 10px;
`;

export const AccountTextInput = styled.TextInput`
  padding: ${(props) => props.theme.space.md};
  background-color: #fff;
  border-radius: 10px;
  outline: blue;
`;

export const AccountTextInputContainer = styled.View`
  gap: ${(props) => props.theme.space.lg};
`;
