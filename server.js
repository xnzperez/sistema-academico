const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Crear conexión a la base de datos
const db = mysql.createConnection({
    host: 'sql5.freesqldatabase.com',
    user: 'sql5774715',
    password: '5Q7pHMQFPK',
    database: 'sql5774715'
});

// Conectar a la base de datos
db.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

// Crear un endpoint para obtener los datos
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM tabla', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
