import React from "react";
import { createContext } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  //1. Create User
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   2. Update Name
  const updateUserProfile = (name) => {
    setLoading(true)
    return updateProfile(auth.currentUser, name);
  };

  const forgetPassword = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email);
  };

  const signInWithGoogle = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const signInWithFacebook = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };



  // 5. Logout
  const logout = () => {
    setLoading(true)
    return signOut(auth);
  };

  //6. Login with Password
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    //this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => {
      //this part will execute once the component is unmounted.
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signIn,
    user,
    logout,
    updateUserProfile,
    forgetPassword,
    signInWithGoogle,
    loading,
    signInWithFacebook
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
