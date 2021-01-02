var express = require('express');
var router = express.Router();
const Response = require('../components/response')
const path = require('path');


exports.addVideo = function (req, res) {
    let db = req.app.get('db');
    
    var addvideo = `INSERT INTO news (new_id,video_title,DOP,priority,issue_status,source_of_video,Location,videographer_name,video_type,upload_video_tumb,upload_video,access)
    VALUES(?,?,?,?,?,?,?,?,?,?,?,'enable');`;
    console.log(addvideo);
    db.query(addvideo, [req.body.newsid,req.body.videotitle,req.body.DOP,req.body.priority,req.body.issueStatus,req.body.SOV,req.body.location,req.body.VGN,req.body.videoType,req.body.videotumb,req.body.uploadvideo], function (err, result) {
      if (err) {
        res.send(new Response.ErrorResponse("Internal server error", err))
      }
      res.send(new Response.SuccessResponse(result));
  
    });
  
  }

  exports.updateVideo = function (req, res) {
    let db = req.app.get('db');
    
    var updateVideo = `UPDATE news SET video_title=?,priority=?,issue_status=?,source_of_video=?,Location=?,videographer_name=?,video_type=?,upload_video_tumb=?,upload_video=?
    WHERE new_id = ?;`;
    console.log(updateVideo);
    db.query(updateVideo, [req.body.videotitle,req.body.priority,req.body.issueStatus,req.body.SOV,req.body.location,req.body.VGN,req.body.videoType,req.body.videotumb,req.body.uploadvideo,req.body.newsid], function (err, result) {
      if (err) {
        res.send(new Response.ErrorResponse("Internal server error", err))
      }
      res.send(new Response.SuccessResponse(result));
  
    });
  
  }

  exports.coupdateVideo= function (req, res) {
    let db = req.app.get('db');
    var newDate=new Date();
    console.log(newDate)
    var updateVideo = `UPDATE news SET video_title=?,priority=?,issue_status=?,source_of_video=?,Location=?,videographer_name=?,video_type=?,upload_video_tumb=?,upload_video=?,status=?,publishDate=?
    WHERE new_id = ?;`;
    console.log(updateVideo);
    db.query(updateVideo, [req.body.videotitle,req.body.priority,req.body.issueStatus,req.body.SOV,req.body.location,req.body.VGN,req.body.videoType,req.body.videotumb,req.body.uploadvideo,req.body.status,newDate,req.body.newsid], function (err, result) {
      if (err) {
        res.send(new Response.ErrorResponse("Internal server error", err))
      }
      res.send(new Response.SuccessResponse(result));
  
    });
  
  }

  exports.getVideo= function (req, res) {
    let db = req.app.get('db');
    var getVideo = `SELECT * FROM news;`;
    console.log(getVideo);
    db.query(getVideo, [], function (err, result) {
      if (err) {
        res.send(new Response.ErrorResponse("Internal server error", err))
      }
      res.send(new Response.SuccessResponse(result));
  
    });
  
  }

  exports.delVideo= function (req, res) {
    console.log(req.body)
    let db = req.app.get('db');
    var delVideo = `DELETE FROM news WHERE new_id=?; `;
    console.log(delVideo);
    console.log(req.body.new_id)
    db.query(delVideo, [req.body.new_id], function (err, result) {
      if (err) {
        res.send(new Response.ErrorResponse("Internal server error", err))
      }
      res.send(new Response.SuccessResponse(result));
  
    });
  
  }

  exports.statusVideo= function (req, res) {
    console.log(req.body)
    let db = req.app.get('db');
    var delVideo = `UPDATE news SET status = ? WHERE new_id = ?;`;
    console.log(delVideo);
    console.log(req.body.new_id)
    db.query(delVideo, [req.body.status,req.body.new_id], function (err, result) {
      if (err) {
        res.send(new Response.ErrorResponse("Internal server error", err))
      }
      res.send(new Response.SuccessResponse(result));
  
    });
  
  }

  exports.getstatus=  function (req, res) {
    console.log(req.body.status)
    let db = req.app.get('db');
    var delVideo = `select * from news where status=? and access = ?`;
    console.log(delVideo);
    console.log(req.body.new_id)
    db.query(delVideo, [req.body.status,req.body.access], function (err, result) {
      if (err) {
        res.send(new Response.ErrorResponse("Internal server error", err))
      }
      res.send(new Response.SuccessResponse(result));
  
    });
  
  }

  exports.getpublishstatus=  function (req, res) {
    console.log(req.body.status)
    let db = req.app.get('db');
    var delVideo = `select * from news where status=? `;
    console.log(delVideo);
    console.log(req.body.new_id)
    db.query(delVideo, [req.body.status], function (err, result) {
      if (err) {
        res.send(new Response.ErrorResponse("Internal server error", err))
      }
      res.send(new Response.SuccessResponse(result));
  
    });
  
  }

  exports.enablestatus=  function (req, res) {
    console.log(req.body.status)
    let db = req.app.get('db');
    var delVideo = `UPDATE news SET access = ? WHERE new_id = ?;`;
    console.log(delVideo);
    console.log(req.body.access,req.body.new_id)
    db.query(delVideo, [req.body.access,req.body.new_id], function (err, result) {
      if (err) {
        res.send(new Response.ErrorResponse("Internal server error", err))
      }
      res.send(new Response.SuccessResponse(result));
  
    });
  
  }