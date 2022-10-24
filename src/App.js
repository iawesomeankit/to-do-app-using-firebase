import './App.css'; 
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import {UserAuthContextProvider} from "./services/auth-config"
function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
 