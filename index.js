let { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'admin',
    database: 'library'
};

const pool = new Pool(config);

const getBooks = async () => {
   try{
    const res = await pool.query('select * from books');
    console.log(res.rows);
    pool.end();
   } catch (e) {
       console.log(e);
   }
};

const insertUser = async () => {
    const text = 'INSERT INTO users(username,password) VALUES($1,$2)';
    const values = ['charlie','charlie1234'];
    const res = await pool.query(text, values);
    console.log(res);
    pool.end();
}

const deleteUser = async () => {
    const text = 'Delete from users where username = $1';
    const value = ['john'];
    const res = await pool.query(text,value);
    console.log(res);
}

const editUser = async () => {
    const text = 'UPDATE users SET username = $1 where username = $2';
    const value = ['pepito','charlie'];
    const res= await pool.query(text,value);
    console.log(res);
}

editUser();