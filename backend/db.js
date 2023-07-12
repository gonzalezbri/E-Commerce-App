const Pool = require('pg').Pool;

const pool = new Pool ({
    user: 'postgres',
    password: '4717',
    host: 'localhost',
    port:  5432,
    database: 'dadinv'
});

module.exports = pool;