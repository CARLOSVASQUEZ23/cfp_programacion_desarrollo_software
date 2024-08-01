const express = require('express')
const run = require('./consultas')

const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`)
//   run(
//     `SELECT 'Hola ' AS saludo, :id AS id
//     FROM dual
    
//     UNION
    
//     SELECT 'Hola ' AS saludo, 109 AS id
//     FROM dual`,
//     [103]
//   );

//   run(
//     `SELECT 'Hola ' AS saludo, :id AS id
//     FROM dual
    
//     UNION
    
//     SELECT 'Hola ' AS saludo, 109 AS id
//     FROM dual`,
//     [105]
//   );
// })



app.use(express.json())
/* app.use(express.urlencoded({ extended: true}))*/


//GET
app.get('/', (req, res) => {
  let result = run(`SELECT 'Hola'  AS saludo, :id AS id
    FROM dual

    UNION

    SELECT 'Hola' AS saludo, 109 AS id
    FROM dual`,
   [103]);
   res.send(result);
})

app.get('/api/user', async (req, res) => {
  let result = await run(`SELECT id, name_user, password
    FROM user_todolist
    WHERE id = :id`, [req.query.id]);
  res.send(result);
})


//POST
app.post('/api/user', async (req, res) =>{
  console.log(req.body)

  let result = await run(
    `BEGIN
      INSERT INTO user_todolist VALUES(:id, :name_user, :password);
      COMMIT;
    END;`,
      [req.body.id, req.body.name_user, req.body.password]
  );
  res.send(result)
})

//PUT
app.put('/api/user', async (req, res) =>{
  let result = await run(
    `BEGIN
      UPDATE user_todolist
        SET name_user = :name_user, password = :password
      WHERE id = :id;
      COMMIT;
    END;`,
      [req.body.name_user, req.body.password, req.body.id]
  );
  res.send(result)
})

//PATCH
app.patch('/api/user', async (req, res) =>{
  let result = await run(
    `BEGIN
      UPDATE user_todolist
        SET name_user = :name_user
      WHERE id = :id;
      COMMIT;
    END;`,
      [req.body.name_user, req.body.id]
  );
  res.send(result)
})


//DELETE
app.delete('/api/user', async (req, res) =>{
  let result = await run(
    `BEGIN
      DELETE user_todolist
      WHERE id = :id;
      COMMIT;
    END;`,
      [req.query.id]
  );
  res.send(result)
})



/////////////////////////////////////////////////////////////////////////

//---------------------------------------------
app.get('/api/calendar', async(req, res) =>{
  console.log(req.query.id);
  
  let result = await run(`SELECT id, fecha
    FROM user_calendario
    WHERE id = :id`, [req.query.id]);
  res.send(result);
})

app.listen(port, () =>{
  console.log(`Example app listening on port http://192.168.52.39:${port}`);
})

//---------------------------------------------
app.post('/api/calendar', async (req, res) =>{
  console.log(req.body)

  let result = await run(
    `BEGIN
      INSERT INTO user_calendario VALUES(:id, :id_user, TO_DATE(:fecha, 'yyyy/mm/dd hh24:mi:ss'));
      COMMIT;
    END;`,
      [req.body.id_user, req.body.id, req.body.fecha]
  );
  res.send(result)
})

//------------------------------

app.patch('/api/calendar', async (req, res) =>{
  let result = await run(
    `BEGIN
      UPDATE user_calendario
        SET id_user = :id_user
      WHERE id = :id;
      COMMIT;
    END;`,
      [req.body.id_user, req.body.id]
  );
  res.send(result)
})


