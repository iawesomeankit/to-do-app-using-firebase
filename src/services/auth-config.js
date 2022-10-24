import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth"
import {auth,db} from "../firebase"
import {collection,getDocs,getDoc,addDoc,updateDoc,doc,deleteDoc} from "firebase/firestore"
const userAuthContext = createContext();
export function UserAuthContextProvider ({children}){
    const [user,setUser] = useState("");
    function addBooks(newBook){
        const bookRef = collection(db, "todo of "+user.uid);
        return addDoc(bookRef,newBook);
    }
    function getAllBooks(){
        const bookRef = collection(db, "todo of "+user.uid);
        return getDocs(bookRef);
    }
    function deleteBook(id){
        const bookDoc = doc(db,"todo of "+user.uid, id);
        return deleteDoc(bookDoc);
    }
    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }
    function logOut() {
        return signOut(auth);
      }
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,(current)=>{
            setUser(current);
        });
        return () =>{
            unsubscribe();
        }
    },[])
    return(
        <userAuthContext.Provider value={{ user, logIn, signUp, logOut,addBooks,getAllBooks,deleteBook}}>
            {children}
        </userAuthContext.Provider>
    )
}
export function useUserAuth(){
    return useContext(userAuthContext);
}