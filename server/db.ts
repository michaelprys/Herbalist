import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'recipes_db',
    password: '09123',
    port: 5432,
});

export const connectToDb = () => {
    return pool.connect();
};
