import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import { useUserAuth } from "../services/auth-config"
// import {collection} from "firebase/firestore"
function Home() {
    const {user,addBooks,deleteBook} = useUserAuth();
    const [todo,setTodo] = useState("");
    const [msg,setMsg] = useState("");
    const {getAllBooks} = useUserAuth ();
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getBooks();
    },[]);

    const getBooks = async () => {
        const data = await getAllBooks();
        console.log(data.docs);
        setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const newBook = {
            todo,
          };
       try{
        await addBooks(newBook);
        setTodo("");
        setMsg("new list has been addded");
       }
       catch{
        setMsg("Error : Can't add your list");
        console.log("error");
       }
    }
    const deleteHandler = async (id) => {
        await deleteBook(id);
        getBooks();
      };
  return (
    <div>
      <Navbar/>
      {user?
      <form onSubmit={handleSubmit}>
        <h1>To do list</h1>
        {user && user.email} <br/>
        {msg}<br/>  
        <span>Enter your to do list</span><br/><br/>
        <input type="text" placeholder="enter your text" value={todo} onChange={(e)=>setTodo(e.target.value)}/><br/><br/>
        <button type='submit'>add</button>
      </form>:<h2>Login to use it</h2>}
      <hr/>
      {user?<button onClick={getBooks}>refresh</button>:""}
      {user && books.map((doc, index) => {
            return (
                <div key={doc.id}>
                <h3>{index + 1} {doc.todo} <button onClick={(e) => deleteHandler(doc.id)} >delete</button></h3>
                </div>
            );
          })}
    </div>
  )
}

export default Home
