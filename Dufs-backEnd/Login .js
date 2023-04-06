
const { autoCommit } = require('oracledb');
const oracledb = require('oracledb');


// Oracle DB 연결 정보
const dbConfig = {
    user: 'admin',
    password: '112',
    connectString: '172.22.200.51:1521/XE'
  };

const userData ={
  id: 'rhs9705kr5',
  pw: 'tmd1597',
  name: '유승진',
  st_number: '20201563',
  gender: 'MALE'
};


//Oracle DB 쿼리 추가 코드
async function insertUser(info) {
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);
        const { id, pw, name, st_number, gender } = info;

        await connection.execute(
            `INSERT INTO USER_INFO(ID, PW, NAME, ST_NUMBER, GENDER)
            VALUES (:id, :pw, :name, :st_number, :gender)`,
            [id, pw, name, st_number, gender]//,
            // 오토커밋
            // {autoCommit: true}
        );
        //수동 커밋
        await connection.execute('COMMIT');

        console.log(`User with ID ${id} inserted into USER_INFO table`);
    }catch (err){
        console.error(err.message);
            // 트랜잭션 롤백
        await connection.execute('ROLLBACK');
    }finally{
        if(connection){
            try{
                await connection.close();
            }catch(err){
                console.error(err.message)
            }
        }
    }
}
insertUser(userData);

/*
async function verifyLogin(id, pw) {
    let connection;
  
    try {
      connection = await oracledb.getConnection(dbConfig);
  
      const result = await connection.execute(
        'SELECT * FROM USER_INFO WHERE ID = :id AND PW = :pw',
        { id: id, pw: pw }
      );
  
      if (result.rows.length === 1) {
        return 1; // ID와 PW가 일치하는 데이터가 1개인 경우 1 반환
      } else {
        return 0; // 일치하는 데이터가 없거나 여러개인 경우 0 반환
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err.message);
        }
      }
    }
  }
*/