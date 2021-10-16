import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
             .catch(error=>{
                 setError(error.message);
             })
    }

    const logOut = () =>{
           signOut(auth)
           .then(() => {
               setUser({});
           })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if (user){
                 setUser(user);
            }
        })
    }, [])

    return {
        user,
        error,
        logOut,
        signInUsingGoogle
    }
}

export default useFirebase;