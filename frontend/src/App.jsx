import { useEffect, useState } from 'react'

function App() {
  const [msg, setMsg] = useState('loading...')
  useEffect(()=>{
    fetch(import.meta.env.VITE_API_URL.replace(/\/?$/,'') + '/health')
      .then(r=>r.json()).then(d=>setMsg(JSON.stringify(d))).catch(()=>setMsg('error'))
  },[])
  return <div style={{padding:24}}>
    <h1>Personal Finance App</h1>
    <p>Backend ping: {msg}</p>
  </div>
}
export default App
