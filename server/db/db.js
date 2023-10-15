import { Client } from 'pg';

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'recipes_db',
    password: '09123',
    port: 5432,
});

client.connect(err => {
    if (err) throw err;
    console.log(`Database ${client.database} is connected`);
});
