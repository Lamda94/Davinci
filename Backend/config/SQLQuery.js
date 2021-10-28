
const oracledb = require('oracledb');
require('dotenv').config();

const mypw = process.env.DBPW;
const libDir = process.env.LIBDIR;

oracledb.initOracleClient({libDir});

exports.execute = async (query, bind=[], autocommit=false) => {
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT; 

    let connection;

    try {        
        connection = await oracledb.getConnection( {
            user          : "System",
            password      : mypw,
            connectString : "localhost:1521"
        });

        const result = await connection.execute(query, bind);
        console.log(result.rows);
    } catch (err) {
        console.error(err);
    } finally {
        try {
            await connection.close();
        } catch (err) {
            console.error(err);
        }
    }
}