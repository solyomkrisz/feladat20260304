const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'etterem',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//!SQL Queries
async function selectall() {
    const query = 'SELECT * FROM exampletable;';
    const [rows] = await pool.execute(query);
    return rows;
}

async function insertetel({ body: { nev, ar, finomsag, lejarati_datum, mennyiseg } }) {
    console.log(new Date().toLocaleDateString());
    const query =
        'INSERT INTO etelek (id, nev, ar, finomsag, lejarati_datum, mennyiseg) VALUES (?, ?, ?, ?, ?, ?)';
    const [result] = await pool.execute(query, [
        crypto.randomUUID(),
        nev,
        ar,
        finomsag,
        lejarati_datum || new Date().toISOString(),
        mennyiseg
    ]);
    return result;
}

async function selectetelek() {
    const query = 'SELECT * FROM etelek';
    const [rows] = await pool.execute(query);
    return rows;
}

async function deleteetel(request) {
    const query = 'DELETE FROM etelek WHERE id = ?';
    const [result] = await pool.execute(query, [request.body.id]);
    return result;
}

//!Export
module.exports = {
    selectall,
    insertetel,
    selectetelek,
    deleteetel
};
