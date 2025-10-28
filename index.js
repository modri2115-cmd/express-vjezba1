const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/users', (req, res) => {
  const users = [
    { id: 1, ime: 'Marko', prezime: 'Horvat' },
    { id: 2, ime: 'Ivana', prezime: 'Kovač' },
    { id: 3, ime: 'Petar', prezime: 'Novak' }
  ];
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server radi na http://localhost:${PORT}`);
});
