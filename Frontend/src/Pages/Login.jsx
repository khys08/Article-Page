import { useState } from "react";
import App from "../App";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid,setInvalid]=useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();

    const login = { Email, password };

    const response = await fetch("http://localhost:4000/api/book/", {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-type": "application/json",
      },
    }

);
    const json = await response.json();

    console.log(json)

    if (!response.ok) {
      console.log("not ok");
    }
    if (response.ok) {
      setEmail("");
      setPassword("");
    }
  };
  const handleLogin=async(e)=>{
    e.preventDefault();

    const signin={Email,password};

    const response= await fetch("http://localhost:4000/api/book/login/",{
      method:"POST",
      body: JSON.stringify(signin),
      headers: {
        "Content-type": "application/json",
      },

    }
  );
  const json= await response.json();
  console.log(json);
  if(response.ok&&json.Email===Email){
    console.log("checked");
    setInvalid("");
    navigate('/Home');
  }
  else{
    setInvalid("Invalid credentials");
    console.log("Not matched");
  }


  }


  return (
    <div id="login-container">
      <h2 id="login-title">Login</h2>
      <br></br>
      <div>
          {invalid}
        </div>
      <form className="Form">
        <div id="username-group">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
            placeholder="Enter your username"
          />
        </div>
        <div id="password-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
          />
        </div>
        <div id="btn-container">
          <button type="button" id="signin-btn" onClick={handleSignin}>Sign In</button>
          <button type="button" id="login-btn" onClick={handleLogin}>Login</button>
        </div>
        
      </form>
    </div>
  );
};

export default Login;
