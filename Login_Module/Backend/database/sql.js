var mysql = require('mysql');
var fs = require('fs');
var con = mysql.createConnection({
    
    //host: "10.5.192.3",
    host: "34.67.133.111",
	user: "root",
    password : "qognition",
    database: 'qognition',
    ssl: {
        ca: fs.readFileSync(__dirname + '/ca.pem'),
        key: fs.readFileSync(__dirname + '/key.pem'),
        cert: fs.readFileSync(__dirname + '/cert.pem')
    }
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to GCP database");
});

// let show = 
// `create TABLE AwsMonitorDetails (
//     id int AUTO_INCREMENT , 
//     mlCategory varchar(100), 
//     mlTechnique varchar(100), 
//     author varchar(100), 
//     projectId varchar(100), 
//     modelName varchar(100),
//     modelType varchar(100),
//     baselineDataPath varchar(255),
//     dataCollectionPath varchar(255),
//     deploymentId varchar(100),
//     configData varchar(100),
//     createdAt varchar(100),
//     endpointName varchar(100),
//     endpointConfigName varchar(100),
//     PRIMARY KEY (id)
// )`



// let data = {
//   name: "aditi", 
//   role: "SD",
//   details: {id: "34", mail: "aditi@gmail"},
//   array: ['1', '2']
// }

// con.query('INSERT INTO test SET reqBody=?', [JSON.stringify(data)],function (err, result){
//   if(err) throw err;
//   console.log(result)
// });    

// let show = show columns from AwsMonitorDetails
// let show = select * from AwsMonitorDetails
// let show = alter table AwsMonitorDetails add jobName varchar(255)
// let show = delete from mlDetails where identifier = 'Sahil_Image_classification_6th_Aug'
// con.query(show, function(err, res){
//     if(err){
//       throw err
//     } else {
//       console.log(res)
//     }
// })
// let show = delete from importModelDetails where status='Image Built and Pushed to ECR'
// con.query(show, function(err, res){
//     if(err){
//       throw err
//     } else {
//       console.log(res)
//     }
// })

module.exports = {
    con
}