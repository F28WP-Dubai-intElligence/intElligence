// THIS IS A DEV TEST FILE TO CHECK SQL FUNCTIONING

// const testSelect = function() {
//     const mysql = require('mysql');
//     const connection = mysql.createConnection({
//         host: "sql12.freemysqlhosting.net",
//         user: "sql12378272",
//         password: "DLzSueTczD",
//         database: "sql12378272"
//     });

//     connection.connect(function(err) {
//         if (err) {
//             console.log('connection problem');
//             throw err;

//         }

//         const sqlTest2 = "SELECT username,score FROM leaderboard ORDER BY score DESC LIMIT 5;";
//         connection.query(sqlTest2, function(err, result) {
//             if (err) {

//             } else {
//                 console.log(result);
//             }
//         });

//     });

// };

// module.exports = testSelect;
// testSelect();