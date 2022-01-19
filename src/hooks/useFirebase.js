import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Pages/Login/FirebaseConfig/firebase.init";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const auth = getAuth();

    const signWithGoogle = () => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
    }

    const logOut = () => {
        signOut(auth).then(() => {
           
        })

    }




    const handleRegistration = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        console.log("Registration Done")
            .then(result => {
                const user = result.user;
            })
    }


    const handleEmailChange = e => {
        setEmail(e.target.value)
    }


    const handlePassWordChange = e => {
        setPassword(e.target.value)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        });
    }, [])




    return {
        user,
        signWithGoogle,
        logOut,
        handleRegistration, handleEmailChange, handlePassWordChange

    }



}

//Sign in with Gmail 








export default useFirebase;