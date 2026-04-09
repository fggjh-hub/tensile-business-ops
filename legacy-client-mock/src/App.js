import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Deliberately old axios version (0.21.1) which has known SSRF vulnerabilities
    axios.get('/api/health')
      .then(response => setData(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Client Application (Legacy)</h1>
      <p>Status: {data ? data.status : 'Loading...'}</p>
    </div>
  );
}

export default App;
