const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cimatec',
  database: 'Sabores_Br',
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL');
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    db.query('SELECT * FROM Users WHERE email = ? AND Senha_User = ?', [email, senha], (err, results) => {
      if (err) return res.status(500).json(err);
      if (results.length > 0) {
        res.json({ success: true, userId: results[0].Id_User });
      } else {
        res.json({ success: false, message: 'Email ou senha incorretos' });
      }
    });
  });
  
app.get('/users', (req, res) => {
  db.query('SELECT * FROM Users', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Users WHERE Id_User = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
});

app.post('/users', (req, res) => {
  const { Nome_User, Senha_User, email } = req.body;
  const createdAt = new Date().toISOString().split('T')[0];
  const updatedAt = createdAt;

  db.query(
    'INSERT INTO Users (Nome_User, Senha_User, email, createdAT_User, updatedAt_User) VALUES (?, ?, ?, ?, ?)',
    [Nome_User, Senha_User, email, createdAt, updatedAt],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        id: results.insertId,
        Nome_User,
        Senha_User,
        email,
        createdAt,
        updatedAt
      });
    }
  );
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { Nome_User, Senha_User, email } = req.body;

  const updatedAt = new Date().toISOString().split('T')[0];

  db.query(
    'UPDATE Users SET Nome_User = ?, Senha_User = ?, email = ?, updatedAt_User = ? WHERE Id_User = ?',
    [Nome_User, Senha_User, email, updatedAt, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.status(204).send();
    }
  );
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Users WHERE Id_User = ?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.status(204).send();
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
