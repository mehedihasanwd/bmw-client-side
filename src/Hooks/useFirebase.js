import { useState, useEffect } from "react";
import firebaseAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Initialize Firebase Authentication
firebaseAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Get Auth
  const auth = getAuth();

  // Google Provider
  const googleProvider = new GoogleAuthProvider();

  // Register User
  const registerUser = (email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        history.replace("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };

  // Sign In Using Email and Password
  const signInUsingEmail = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };

  // Sign In Using Google
  const signInUsingGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };

  // User State Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // LogOut User
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    registerUser,
    logOut,
    signInUsingEmail,
    signInUsingGoogle,
    isLoading,
  };
};

export default useFirebase;
