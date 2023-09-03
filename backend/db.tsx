import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: '4717',
  host: 'localhost',
  port: 5432,
  database: 'darkalleydeals',
});

export default pool;
