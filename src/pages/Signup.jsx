import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup(){
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [gender, setGender] = useState('male');

  function handleSubmit(e){
    e.preventDefault();
    // store a few demo values in localStorage for dashboard demo
    localStorage.setItem('displayName', name || 'You');
    localStorage.setItem('gender', gender);
    nav('/dashboard');
  }

  return (
    <div className="page">
      <h2>Create account</h2>
      <form onSubmit={handleSubmit} style={{maxWidth:420}}>
        <label style={{display:'block',marginBottom:8}}>Name
          <input aria-label="name" value={name} onChange={(e)=>setName(e.target.value)} style={{display:'block',width:'100%',padding:8,marginTop:6,borderRadius:8,border:'none',background:'var(--glass)',color:'var(--text)'}} />
        </label>
        <label style={{display:'block',marginTop:12}}>Gender
          <select value={gender} onChange={(e)=>setGender(e.target.value)} style={{display:'block',width:'100%',padding:8,marginTop:6,borderRadius:8}}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
            <option value="other">Other</option>
          </select>
        </label>
        <div style={{marginTop:16}}>
          <button className="btn" type="submit">Create account</button>
        </div>
      </form>
    </div>
  );
}