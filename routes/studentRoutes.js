const express = require('express');
const router = express.Router({mergeParams: true});
const getScorecard = require('../controllers/getScorecard')
const authMiddleware = require('../middleware/authMiddleware');

router.get("/student/scorecard/:studentId",  authMiddleware.studentAuth , getScorecard)

module.exports = router;