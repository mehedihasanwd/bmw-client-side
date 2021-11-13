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
  const [admin, setAdmin] = useState(false);

  // Get Auth
  const auth = getAuth();

  // Google Provider
  const googleProvider = new GoogleAuthProvider();

  // Register User
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = { email, displayName: name };
        // Set USer
        setUser(newUser);

        // Save User To Database
        saveUserPost(email, name);

        // Send name to firebase after user creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        history.replace("/");
        // window.location.reload();
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
        const destination = location?.state?.from || "/dashboard";
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
        // setUser(result.user);
        const destination = location?.state?.from || "/dashboard";
        const user = result.user;
        saveUserPut(user.email, user.displayName);
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

  // Collect Admin
  useEffect(() => {
    fetch(`https://still-atoll-84410.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);

  // User Saved To Database
  const saveUserPost = (email, displayName) => {
    const user = { email, displayName };
    fetch(`https://still-atoll-84410.herokuapp.com/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  const saveUserPut = (email, displayName) => {
    const user = { email, displayName };
    fetch(`https://still-atoll-84410.herokuapp.com/users`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

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
    admin,
    registerUser,
    logOut,
    signInUsingEmail,
    signInUsingGoogle,
    isLoading,
  };
};

export default useFirebase;
