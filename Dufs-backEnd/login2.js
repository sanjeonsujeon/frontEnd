/*
const oracledb = require('oracledb');

async function insertData() {
    let connection;
  
    try {
      // Oracle 데이터베이스에 연결
      connection = await oracledb.getConnection({
        user: "admin",
        password: "112",
        connectString: "172.22.200.51/xe"
      });
  
      // 데이터 입력 쿼리 실행
      const result = await connection.execute(
        'INSERT INTO USER_INFO (ID, PW, NAME, ST_NUMBER, GENDER)VALUES (:ID, :PW, :NAME, :ST_NUMBER, :GENDER)',
        {
          ID: 'bestspark124',
          PW: '112',
          NAME: '홍충표',
          ST_NUMBER: '20201562',
          GENDER: 'MALE'
        }//,
        //{autoCommit:true}
      );
        await connection.execute('COMMIT');
    console.log('데이터 입력 완료');
  
    } 
    catch (err) {
    console.error(err);
    // 트랜잭션 롤백
    await connection.execute('ROLLBACK');


    } finally {
      if (connection) {
        try {
          // 연결 종료
          await connection.close();
          console.log('데이터베이스 연결 종료');
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  
  insertData();
*/