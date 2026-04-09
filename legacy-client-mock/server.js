const express = require('express');
const lodash = require('lodash'); 
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/health', (req, res) => {
  // A deliberately bad pattern using lodash.merge which can be vulnerable to prototype pollution in lodash 4.17.20
  const payload = JSON.parse(req.query.data || '{}');
  const config = lodash.merge({}, payload);
  res.json({ status: 'ok', config });
});

app.listen(PORT, () => {
  console.log(`Legacy API running on port ${PORT}`);
});
