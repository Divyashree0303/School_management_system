const express = require('express');
const router = express.Router({mergeParams: true});
const students_get = require('../controllers/students_get');
const addStudentSubject = require('../controllers/studentSubject');
const makeScorecard = require('../controllers/makeScorecard');
const authMiddleware = require('../middleware/authMiddleware');
const getRanklist = require('../controllers/getRanklist');

router.get("/teacher/students", authMiddleware.teacherAuth , students_get);
router.post("/teacher/student/:studentId/subject", authMiddleware.teacherAuth , addStudentSubject );
router.post("/teacher/student/scorecard/:studentId", authMiddleware.teacherAuth , makeScorecard );
router.get("/teacher/ranklist", authMiddleware.teacherAuth , getRanklist );

module.exports = router;