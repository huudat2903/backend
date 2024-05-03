const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
});

async function fetchData() {
  try {
    await client.connect();
    const query = 'SELECT * FROM "user"';
    const result = await client.query(query);
    console.log(result.rows);
  } catch (err) {
    console.error("Error executing query:", err.message);
  } finally {
    await client.end();
  }
}

fetchData();
