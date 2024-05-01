import { app } from "@/lib/firebase_config";
import { getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { setAuthToken,setDisplayName,setEmail,setPhone,
  setIsAuthenticated,setFirstName, setLastName } from "@/lib/store/authSlice";
//import { useAppDispatch } from "@/lib/store";
//import { AuthResult } from "@/lib/store/authSlice";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

import Alert from "../create_account/component/alert";
import { FacebookAuthProvider } from "firebase/auth/cordova";
import { json } from "stream/consumers";


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
//create new user
export const createNewUserWithEmailAndPassword = ((email:string, password:string,
  
)=>createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  //Save value in local storage
  let navigate = useNavigate();

  const user = userCredential.user;
  localStorage.setItem("email", JSON.stringify(user.email));
  localStorage.setItem("uid", JSON.stringify(user.uid));
  localStorage.setItem("token", JSON.stringify(user.getIdToken));
  localStorage.setItem("isAuthenticated", JSON.stringify(true));

 alert("Thanks for signing up with us!");
 setTimeout(()=>{
  location.replace('/dashboard');
  2000
})

  //localStorage.setItem("name", (user.displayName|| '').toString())

  // Signed up 
 /* const user = userCredential.user;
  const dispatch = useAppDispatch();

 dispatch(setEmail(user.email));
 dispatch(setAuthToken(user.uid));
dispatch(setIsAuthenticated(true));*/
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // Todo remove this
  console.log(errorCode);
  console.log(errorMessage);
}));
//Login with username and email
export const signInWithEmail =((email:string, password:string)=>
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    //fetch user details
    const user = userCredential.user;
   /* dispatch(setEmail(user.email));
    dispatch(setIsAuthenticated(true));
    dispatch(setAuthToken(user.uid));*/
    // ...
   
    location.replace('/dashboard');

  })
  .catch((error) => {
   // const dispatch = useAppDispatch();

    const errorCode = error.code;
    const errorMessage = error.message;
alert(errorMessage)
    localStorage.setItem("isAuthenticated", JSON.stringify(false))
    //dispatch(setIsAuthenticated(true));

  })
);

export function signUpWithGoogle(){
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken?.toString();
    // The signed-in user info.
    const user = result.user;
   
      localStorage.setItem("uid", JSON.stringify(user.uid));
    localStorage.setItem("dsplay_name", JSON.stringify(user.displayName));
    localStorage.setItem("is_authenticated", JSON.stringify(true))
    localStorage.setItem("email", JSON.stringify(user.email))

    

    


    // IdP data available using getAdditionalUserInfo(result)
    // ...
    /*const dispatch = useAppDispatch();

   dispatch(setAuthToken(user.providerId))
    dispatch(setFirstName(user.displayName))
    dispatch(setEmail(user.email))*/

    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
   // console.log(credential);
   console.log(errorMessage)
  });

}


export const signUpWithFaceBook = (()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken ;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
   /* const dispatch = useAppDispatch();

    dispatch(setAuthToken(user.providerId))
    dispatch(setFirstName(user.displayName))
    dispatch(setEmail(user.email))*/

    localStorage.setItem("uid", JSON.stringify(user.uid));
    localStorage.setItem("dsplay_name", JSON.stringify(user.displayName));
    localStorage.setItem("is_authenticated", JSON.stringify(true))
    localStorage.setItem("email", JSON.stringify(user.email))

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    // ...
    //console.log(credential);
    console.log(process.env.NEXT_PUBLIC_AUTH_DOMAIN)
    console.log(errorMessage)
  });


})
