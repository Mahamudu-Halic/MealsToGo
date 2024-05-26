import styled from "styled-components";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useContext, useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../../services/auth/auth.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IconButton } from "react-native-paper";

const CameraContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const CameraScreenView = styled(CameraView)`
  flex: 1;
`;

const IconButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 15px;
  gap: 10px;
`;

const CameraIconButton = styled(IconButton).attrs({
  iconColor: "#fff",
  containerColor: "#333",
})``;

//   return (
//     <CameraContainer>
//       <CameraScreenView
//         facing={facing}
//       >
//         <IconButtonContainer>
//
//         </IconButtonContainer>
//       </CameraScreenView>
//     </CameraContainer>
//   );
// };

export const CameraScreen = ({ navigation }) => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const { user, setPhoto } = useContext(AuthContext);
  const cameraRef = useRef();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <CameraContainer>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </CameraContainer>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const takePicture = async () => {
    const photo = cameraRef && (await cameraRef.current.takePictureAsync());
    await AsyncStorage.setItem(`@profile-${user?.uid}`, photo?.uri);
    setPhoto(photo?.uri);
    navigation.goBack();
  };

  return (
    <CameraContainer>
      <CameraScreenView
        facing={facing}
        ref={(ref) => (cameraRef.current = ref)}
      >
        <IconButtonContainer>
          <CameraIconButton icon={"camera"} onPress={takePicture} size={35} />

          <CameraIconButton
            icon={"orbit-variant"}
            onPress={toggleCameraFacing}
            size={25}
          />
        </IconButtonContainer>
      </CameraScreenView>
    </CameraContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
