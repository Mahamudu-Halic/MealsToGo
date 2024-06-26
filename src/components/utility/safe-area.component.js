import { StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`;
