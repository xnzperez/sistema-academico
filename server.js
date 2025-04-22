const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Conexión MySQL
const db = mysql.createConnection({
    host: 'sql5.freesqldatabase.com',
    user: 'sql5774715',
    password: '5Q7pHMQFPK',
    database: 'sql5774715'
});

db.connect(err => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Ruta principal renderiza HTML con las tablas
app.get('/', (req, res) => {
    db.query('SHOW TABLES', (err, results) => {
        if (err) {
            return res.status(500).send(`<h1>Error al obtener tablas</h1><pre>${err.message}</pre>`);
        }

        const tablas = results.map(row => Object.values(row)[0]);

        let html = `
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Tablas en la Base de Datos</title>
        </head>
        <body>
          <h1>Tablas en la Base de Datos</h1>
          <ul>
            ${tablas.map(tabla => `<li>${tabla}</li>`).join('')}
          </ul>
        </body>
      </html>
    `;

        res.send(html);
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
