var express = require('express');
var router = express.Router();
var dashboard = require('../controller/dashboard.controller')
var checkToken = require('../helper/verifyToken')

/* post video. */
router.post('/addVideo',dashboard.addVideo);

// get video
router.get('/getVideo',dashboard.getVideo);

//update video
router.post('/updateVideo',dashboard.updateVideo);

//co Admin update video
router.post('/coupdateVideo',dashboard.coupdateVideo);

//del video
router.post('/delVideo',dashboard.delVideo);

//status video
router.post('/statusVideo',dashboard.statusVideo);

//send status
router.post('/getstatus',dashboard.getstatus);

//status for publish
router.post('/getpublishstatus',dashboard.getpublishstatus);

//publish enable
router.post('/enablestatus',dashboard.enablestatus);


module.exports = router;
