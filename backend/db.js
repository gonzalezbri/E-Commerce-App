const Pool = require('pg').Pool;

const pool = new Pool ({
    user: 'postgres',
    password: 'lambofgod',
    host: 'localhost',
    port:  5432,
    database: 'badinventory'
});

module.exports = pool;