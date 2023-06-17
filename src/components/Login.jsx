import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if(email && password){

      const newEntry = {id:new Date().getTime().toString(), email, password };//key and value
      // const newEntry = {id:new Date().getTime().toString(), email: email, password: password };//key and value
      setAllEntry([...allEntry, newEntry]);
      console.log(newEntry);
      setEmail("");
      setPassword("");
    }
    else{
      alert("fill the form")
    }
  };

  return (
    <>
      <div className="center">
        <form action="" onSubmit={submitForm}>
          <div>
            <h1>Login</h1>
          </div>
          <div className="centerDiv">
            <div className="text_field">
              <input
                type="email"
                value={email}
                autoComplete="off"
                onChange={(event) => setEmail(event.target.value)}
             
              />
              <span></span>
              <label>Email</label>
            </div>
            <div className="text_field">
              <input
                type="password"
                value={password}
                autoComplete="off"
                onChange={(event) => setPassword(event.target.value)}
              />
              <span></span>
              <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <input type="submit" value="Login" />
            <div className="sign_up">
              Not a member?
              <a href="#">Sign Up</a>
            </div>
          </div>
        </form>

      </div>
      {allEntry.length > 0 && (
      <div className="tableContainer">
        <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>id</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Password</th>
            </tr>
          </thead>
          <tbody>
            {allEntry.map((curElement) => 
            {
const {id, email,password}= curElement;
return            (
              <tr key={curElement.id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{id}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{email}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{password}</td>
              </tr>
            )})}
          </tbody>
        </table>
        </div> )}
    </>
  );
};

export default Login;
