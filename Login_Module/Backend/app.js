const express=require('express');

const http=require("http")
const app=express();
const {LocalStorage} = require("node-localstorage");

const { response } = require('express');

const bodyParser = require('body-parser');

const session = require('express-session');

const db = require("./database/sql");

const queries = require("./controllers/queries");

const table='loginTest'
var userId = null;

// app.use(cors({
//     origin:'*',
//     credentials:true,
// }))
// app.use(function(req,res,next){
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Methods','*');
//     res.header('Access-Control-Allow-Headers','*');
//     res.header('Access-Control-Allow-Crendentials',true);
//    /* req.header('Access-Control-Allow-Origin','*');
//     req.header('Access-Control-Allow-Methods','PUT, GET, POST, DELETE, OPTIONS');
//     req.header('Access-Control-Allow-Headers','*');
//     req.header('Access-Control-Allow-Crendentials',true);*/
// })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'a',userId:'', cookie: { maxAge: 60000 }}))

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-request-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-request-Headers', 'X-Requested-With,content-type,authorization,auth-token');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization,auth-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  
  })

// app.post("/google", async (req, res) => {
//     console.log(req.body)
//     const { tokenId }  = req.body.tokenId

//     console.log("token" + tokenId)
//     const ticket = await client.verifyIdToken({
//         idToken: tokenId,
//         audience: "881458096689-beugkqj0c83vf7qspd114bgj979hsq4f.apps.googleusercontent.com"
//     }).then(response=>{
//         const { name, email, picture } = response.getPayload(); 
//         console.log("Payload"+response)   
//     });
//     //const { name, email, picture } = ticket.getPayload();      
//     //console.log(name)
//     /*const user = await db.user.upsert({ 
//         where: { email: email },
//         update: { name, picture },
//         create: { name, email, picture }
//     })*/
//     res.status(201)
//     res.json(user)
// })
app.use(express.json());

const { OAuth2Client } = require('google-auth-library');
const { resolve } = require('path');
const { fail } = require('assert');
const client = new OAuth2Client("881458096689-beugkqj0c83vf7qspd114bgj979hsq4f.apps.googleusercontent.com")

var localStorage = new LocalStorage('./scratch'); 


app.post("/api/v1/auth/google", async (req, res) => {
    console.log(req.body)
    const { token }  = req.body
    // token = '123'

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: "881458096689-beugkqj0c83vf7qspd114bgj979hsq4f.apps.googleusercontent.com"
    });
    const { name, email, picture } = ticket.getPayload();
    
    var user = queries.insertData(table,{name,email})

    userId = await queries.getId(table,email)
    
    queries.updateData(table,"aaa",name,"39")

   var allUsers = await queries.getAll(table)

   console.log(allUsers)

    // console.log(user)
    //  db.con.query('INSERT INTO ?? SET ?', [ table, {name,email}],function (err, result){
    //     if(err) throw err;
    //     // console.log(table)
    //     //  console.log(result);
    //     // return result.OkPacket.insertId
    //   });
      


    //   userId = await db.con.query('select loginTest.userID from ?? where email like ?', [table,email],function (err, result){
    //     if(err) {
    //       console.log(err)
    //     }
    //     else {
    //         console.log(result)
    //      return(result)
    //     }
    //   });

    // userId = db.con.query('SELECT userID FROM loginTest WHERE loginTest.email=?',[email],function (err, result){
    //     if(err) {
    //       console.log(err)
    //     }
    //     else {
    //         console.log(result)
    //       return(result.userID)
          
    //     }
    //   });


      console.log(userId[0].userID)

    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('picture',picture);

    // const user = await db.con.upsert({ 
    //     where: { email: email },
    //     update: { name, picture },
    //     create: { name, email, picture }
    // })
   
    req.session.userId= localStorage.getItem('name')

    // console.log(req.session.userId)
    // console.log(localStorage.getItem('name'))
    res.status(201)
    res.json("Success")
    // res.json(user)
})

app.use(async (req, res, next) => {
    // const user = await localStorage.getItem('name')
    req.session.userId = await localStorage.getItem('name')
    next()
})


app.get("/api/v1/auth/logout", async (req, res) => {
    await req.session.destroy()
    localStorage.clear()
    res.status(200)
    res.json({
        message: "Logged out successfully"
    })
})

app.get("/me", async (req, res) => {
    res.status(200)
    res.json({'Current User' : req.session.userId})
    // res.json({'Name' : localStorage.getItem('name'),
            // 'Email' : localStorage.getItem('email')})
})


//User Registration module

  app.post('/register', (req, res) => {

    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    db.con.query('INSERT IGNORE INTO loginTest (email,name,password) VALUES (?,?,?)',[email,name,password],
    (err,result)=> {
      console.log(err);
    })
    
  })

  app.post('/login', (req, res) => {

    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    db.con.query(
      'SELECT * FROM loginTest WHERE email = ?  AND password = ? ',
      [email,password],
    (err,result)=> {
      
      if(err){
        console.log(err)
      // res.send({err:err});
    } 
      if (result[0]){
        console.log(result)
       return res.json(result)
        
      }else {
        console.log("Yooooo")
      //  res.send({message : "Please enter correct Credentials", status: 'error'})
        res.send(401)
      }
    
    })
    
  })

localStorage.clear()
app.listen(8081,(req,res)=>{
  console.log("running");
});