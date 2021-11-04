import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from 'react'
import initializeAuthentication from '../Login/firebase_init'

initializeAuthentication();
const useFirebase =()=>{
    const [user, setUser] = useState({})
    const[isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    

    const googleSignIn = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        // .then(result =>{
        //     console.log(result.user)
        // })
        
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{})
        .finally(
            setIsLoading(false)
        )
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return unsubscribe
    },[])


    return{
        user,
        googleSignIn,
        logOut,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;