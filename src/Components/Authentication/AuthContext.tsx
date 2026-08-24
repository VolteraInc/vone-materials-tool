import { useEffect, useState, useContext } from "react";
import app from "./Firebase";
import * as React from "react";
import { auth, authGoogle, db } from "./Firebase";

const AuthContext = React.createContext({});
export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState();
  const [pending, setPending] = useState(true);

  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      createUser(cred);
    });
  }
  function createUser(cred: any) {
    const docRef = db.collection("users").doc(auth.currentUser?.uid);
    docRef.set({ cred });
  }
  function login(email: string, password: any) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }
  function googlelogin() {
    return auth.signInWithPopup(authGoogle);
  }
  useEffect(() => {
    app.auth().onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);
  const value = {
    currentUser,
    signup,
    login,
    googlelogin,
    logout,
  };

  return (
    <>
      {pending ? (
        <div>Loading...</div>
      ) : (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      )}
    </>
  );
}
export default AuthProvider;
