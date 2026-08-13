import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../auth/__firebaseinit';

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
      setLoading(false);



    })
    return () => unsubscribe();
  },[])


  const userRegistration = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }


  const userLogin = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }
  const authInfo = {userRegistration,userLogin,user,loading};
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
