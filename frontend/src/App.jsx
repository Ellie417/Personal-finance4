import { useEffect, useState } from "react";
//
import { api } from "./lib/api";

function App() {
  const [msg, setMsg] = useState("loading...");

  useEffect(() => {
    // backend
    api("/api/health")
      .then((d) => setMsg(JSON.stringify(d)))
      .catch((e) => setMsg("error: " + e.message));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Personal Finance App</h1>
      <p>Backend ping: {msg}</p>
    </div>
  );
}

export default App;
