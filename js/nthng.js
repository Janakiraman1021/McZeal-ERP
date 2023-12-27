const sq = require("sqlite3").verbose()
 
let db = new sqlite3.Database('usersdb', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the users database.');
  });