const db = require("../database/sql");

module.exports ={
    getAll(table) {
        return new Promise((resolve,reject) => {
          db.con.query('SELECT * FROM ??', [table],function (err, result){
            if(err) {
              console.log(err)
            }
            else {
              resolve(result)
            }
          });  
  
        })    
  
      },
      
//   async  insertData(table, data) {
//       //dynamic query
//       var allUsers = db.con.query('SELECT * FROM ??', [table],function (err, result){
//         if(err) {
//           console.log(err)
//         }
//         else {
//           return(result)
//         }
//       });  
//          var count=0;
//             for(count=0;count<allUsers.length;count++){
//                 if(allUsers[count].email===email){
//                     //update
//                     // updateData(table,data,allUsers[count].userID)
//                     db.con.query('UPDATE ??  SET email=?, name=? where userID=?', [table,email,name, userID ] , function (err, result) {  
//                         if (err) throw err;
//                         // console.log("UPDATED!!!!!!!!!!!!!")
//                         // console.log(result);
//                       });
//                     break;
//     }
//         }
//         if(count===allUsers.length){
//             //insert
//             db.con.query('INSERT INTO ?? SET ?', [ table, data ],function (err, result){
//                 if(err) throw err;
//                 // console.log(table)
//                 // console.log(result);
//                 return result
//             });    
//         }

           
//     },

async insertData(table, data) {
    //dynamic query
    
      db.con.query('INSERT IGNORE INTO ?? SET ?', [ table, data ],function (err, result){
          if(err) throw err;
          // console.log(table)
          // console.log(result);
          return result
      });   
      
  
      
   
  },

    async getId(table,email){
        return new Promise((resolve,reject) => {
          let show = 'select loginTest.userID from ?? where email like ?'
          db.con.query(show, [table,email], function(err, result, fields) {
            if (err) 
            { console.log(err.message) }
            else { resolve(result)}
          });
        })
      },

    // selectData(table, data) {
    //     //dynamic query
    //     db.con.query('SELECT userID FROM ??', [ table ],function (err, result){
    //       if(err) throw err;
    //       // console.log(table)
    //       // console.log(result);
    //       return result
    //     });    
    //   },
    
    updateData(table, email,name, userID ){
      db.con.query('UPDATE ??  SET email=?, name=? where userID=?', [table,email,name, userID ] , function (err, result) {  
        if (err) throw err;
        // console.log("UPDATED!!!!!!!!!!!!!")
        // console.log(result);
      });
    },

    

    // async deletePort(table, portNumber){
    //     db.con.query('delete from ?? where portNumber=?', [table, portNumber] , function (err, result) {  
    //       if (err) throw err;
    //       // console.log("Result after deleting",result);
    //     });
    // },
}