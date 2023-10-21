import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginAPI(username, password);

    if(response.success) {
      setLoginSuccess(true);
    }
  }
  
  if(loginSuccess) {
    navigate('/pos');
  }

  return (
    <div>
      <h1>Login</h1> 
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
          
        <input
          type="password"  
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

async function loginAPI(username, password) {
  // Call API endpoint
  const response = {
    success: username === 'admin' && password === 'password' 
  }
  return response;
}

export default LoginPage;