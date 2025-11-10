import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Splash(){
  const nav = useNavigate();
  return (
    <main className="splash" role="main" aria-labelledby="splashTitle">
      <div className="logo">P</div>
      <h1 id="splashTitle">Proximate</h1>
      <p>Discover people nearby, connect, and explore. Your location stays private — only used for matching.</p>
      <div style={{display:'flex',gap:12}}>
        <button className="btn" onClick={()=>nav('/onboarding')}>Get Started</button>
        <button className="btn ghost" onClick={()=>nav('/signup')}>Sign up</button>
      </div>
    </main>
  );
}