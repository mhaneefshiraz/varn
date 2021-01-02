const Response = require('../components/response')
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var env = require('../config/env.config')
var express = require('express');
var router = express.Router();





exports.authenticate = function (req, res) {

    var email = req.body.email;
    var password = req.body.password;
    var checkPWD;
   
    let db = req.app.get('db');
    var validationQuery =  `SELECT * FROM user WHERE email = ? LIMIT 0,1`;
   
    // console.log(validationQuery);
    db.query(validationQuery, [email], function (err, result) {
        var getresult=result;
        if (err) {
            res.send(new Response.ErrorResponse('Server error', err));
        } else {
            if (getresult.length > 0) {
                
                    bcrypt.compare(password,getresult[0].password,(err,result)=>{
        checkPWD=result;
        res.send(new Response.SuccessResponse(getresult[0] ,'User login Successfull'));
        // console.log(checkPWD)
        // if (checkPWD) {
        //     // console.log(getresult[0])
        //     var token = jwt.sign({'firstname':getresult[0].firstname,'lastname':getresult[0].lastname,'roles':getresult[0].roles}, env.SECRET_KEY, {
        //         expiresIn: 5000
        //     });
            
        //     res.send(new Response.SuccessResponse({ token: token },'User login Successfull'));
        // } else {
        //     res.send(new Response.ErrorResponse('Email and password does not match', err));

        // }
        
    })
            }
            else {
                res.send(new Response.ErrorResponse('Email does not exits', err));

            }
        }
    });
   
  
}

// exports.addVideo = function (req, res) {
//     let db = req.app.get('db');
    
//     var addvideo = `INSERT INTO news (new_id,video_title,DOP,priority,issue_status,source_of_video,Location,videographer_name,video_type,upload_video_tumb,upload_video,access)
//     VALUES(?,?,?,?,?,?,?,?,?,?,?,'enable');`;
//     console.log(addvideo);
//     db.query(addvideo, [req.body.newsid,req.body.videotitle,req.body.DOP,req.body.priority,req.body.issueStatus,req.body.SOV,req.body.location,req.body.VGN,req.body.videoType,req.body.videotumb,req.body.uploadvideo], function (err, result) {
//       if (err) {
//         res.send(new Response.ErrorResponse("Internal server error", err))
//       }
//       res.send(new Response.SuccessResponse(result));
  
//     });
  
//   }

exports.generatePassword = function (req, res) {
//    console.log(req.body.password)
let db = req.app.get('db');
    var password=req.body.pwd
bcrypt.hash(password,env.saltRounds,(err, hash)=>{
        console.log(hash)
      var  password1=hash

        var addvideo = `INSERT INTO user (username,email,password,role)VALUES(?,?,?,'user');`;
            console.log(addvideo);
console.log(password1)
                db.query(addvideo, [req.body.username,req.body.email,hash], function (err, result) {
      if (err) {
        res.send(new Response.ErrorResponse("Internal server error", err))
      }
      res.send(new Response.SuccessResponse(result));
  
    });
        // res.send(new Response.SuccessResponse({ password: hash },'User login Successfull'));

    });
}