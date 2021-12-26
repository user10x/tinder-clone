import React, {createContext, useContext, useEffect, useState} from 'react'
import * as Google from "expo-google-app-auth";

import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    signOut,
} from "@firebase/auth";

import {auth} from "../firebase";
const AuthContext = createContext({});

const  config = {
    iosClientId: "308998007727-hjlpms74jud6h0nrhkjg0j0q2qhsqrkp.apps.googleusercontent.com",// env
    androidClientId: "308998007727-nrfs3j0qsfe3lq71m2ikr1qftjj8jp1r.apps.googleusercontent.com",//env
    scopes: ["profile", "email"],
    permissions: ["public_profile","email", "gender","location"]
}



export const AuthProvider = ({children}) => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loadingInitial, setloadingInitial] = useState(true); // blccks the ui in the beggening when the app is loading
    const [loading, setLoading] = useState(false);
  useEffect(
      ()=>
      onAuthStateChanged(auth,(user) =>{
          if (user){
              setUser(user);
          }else {
              // not logged in
              setUser(null);
          }
          setloadingInitial(false);
      }),[])

  const logout = () => {
      signOut(auth).catch((error)=>setError(error)).finally(setLoading(false));
  }
  const signInWithGoogle = async () => {
      setLoading(true);
      await Google.logInAsync(config).then(async (loginResult) =>{
          if (loginResult.type === "success"){
              //
              const {idToken,  accessToken} = loginResult;
              const credential = GoogleAuthProvider.credential(idToken, accessToken);
              await signInWithCredential(auth,credential)
          }
          return Promise.reject();
      })
      .catch((error) => setError(error))
      .finally(()=>setLoading(false))
      ;
    }
  console.log(user);
  return(
    <AuthContext.Provider
        value={{
            user,
            loading,
            error,
            logout,
            signInWithGoogle}}
    >
        {/* blocks the ui, maybe load a spashscreen here*/}
        {!loadingInitial && children}
    </AuthContext.Provider>
  );
}

// hook pattern
export default function useAuth() {
    return useContext(AuthContext)
}