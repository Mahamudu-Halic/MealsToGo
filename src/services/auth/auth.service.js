import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase";

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signOutRequest = () => {
  return signOut(auth);
};
