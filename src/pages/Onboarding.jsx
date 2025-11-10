import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Onboarding(){
  const nav = useNavigate();
  return (
    <div className="page">
      <h2>Onboarding</h2>
      <p>Welcome! We'll ask a few preferences to help match you with people nearby.</p>
      <ol>
        <li>Set your gender & interests</li>
        <li>Allow location access</li>
        <li>Start browsing nearby people</li>
      </ol>
      <div style={{marginTop:16}}>
        <button className="btn" onClick={()=>nav('/signup')}>Continue to Sign up</button>
      </div>
    </div>
  );
}