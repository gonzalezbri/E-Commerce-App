const Pool = require('pg').Pool;

const pool = new Pool ({
    user: 'postgres',
    password: 'Malik852',
    host: 'localhost',
    port:  5432,
    database: 'D.A.D'
});

module.exports = pool;