import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// loginRequest("sample@gmail.com", "test123").then((response) =>
//   console.log(response)
// );
