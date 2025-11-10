import React, { useEffect } from 'react';

export default function Dashboard(){
  useEffect(()=>{
    // load maps if key injected
    const loadGoogleMaps = (apiKey) => {
      if(!apiKey) return;
      const s = document.createElement('script');
      s.src = 'https://maps.googleapis.com/maps/api/js?key=' + encodeURIComponent(apiKey) + '&callback=initMap';
      s.async = true; s.defer = true;
      document.head.appendChild(s);
      window.initMap = () => {
        // minimal placeholder map
        const el = document.getElementById('map');
        if (!el) return;
        el.style.height = '100%';
        // Google will initialize the map here; for now we use a placeholder background
      };
    };

    const key = window.__MAPS_API_KEY__;
    if (key) loadGoogleMaps(key);
    else {
      // Attempt to fetch /config (Netlify function) if present
      fetch('/config').then(r=>r.json()).then(cfg=>{
        if (cfg && cfg.MAPS_API_KEY) loadGoogleMaps(cfg.MAPS_API_KEY);
      }).catch(()=>{ /* no config available in dev */ });
    }
  }, []);

  return (
    <div style={{height:'100vh',display:'flex',flexDirection:'column'}}>
      <div style={{padding:12,background:'var(--card)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>Proximate</div>
        <div style={{opacity:.9}}>Welcome, {localStorage.getItem('displayName') || 'You'}</div>
      </div>
      <div id="map" style={{flex:1, background:'linear-gradient(180deg,#0b0b12,#12121a)'}} aria-label="Map area">
        <div style={{padding:20,color:'var(--muted)'}}>Map placeholder — allow location access to center map</div>
      </div>
    </div>
  );
}