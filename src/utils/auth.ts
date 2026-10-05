import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";

import { app } from "../firebase/config";

const auth = getAuth(app);

export async function login(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
}

export async function register(email: string, password: string) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
}

export async function logout() {
  await signOut(auth);
}

export async function updateUserProfile(
  user: User,
  displayName: string,
  photoURL?: string
) {
  await updateProfile(user, {
    displayName,
    ...(photoURL ? { photoURL } : {}),
  });
}

export function subscribeToAuth(
  callback: (user: User | null) => void
) {
  return onAuthStateChanged(auth, callback);
}