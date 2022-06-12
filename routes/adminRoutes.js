const express = require('express');
const router = express.Router({mergeParams: true});
const addTeacher = require('../controllers/addTeacher');
const deleteTeacher = require('../controllers/deleteTeacher');
const addClass = require('../controllers/addClass');
const deleteClass = require('../controllers/deleteClass');
const addStudent = require('../controllers/addStudent');
const deleteStudent = require('../controllers/deleteStudent');
const mapTeacherClass = require('../controllers/mapTeacherClass');
const mapStudentClass = require('../controllers/mapStudentClass');
const teachers_get = require('../controllers/teachers_get');
const students_get = require('../controllers/students_get');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/admin/teachers', authMiddleware.adminAuth, teachers_get);
router.get('/admin/students', authMiddleware.adminAuth, students_get);
router.post('/admin/teacher/', authMiddleware.adminAuth , addTeacher );
router.post('/admin/student/', authMiddleware.adminAuth , addStudent);
router.post('/admin/class/' , authMiddleware.adminAuth, addClass);
router.delete('/admin/teacher/:teacherId', authMiddleware.adminAuth , deleteTeacher);
router.delete('/admin/class/:id', authMiddleware.adminAuth , deleteClass);
router.delete('/admin/student/:studentId', authMiddleware.adminAuth , deleteStudent);
router.post('/admin/teacher/:teacherId/class/:classId', authMiddleware.adminAuth , mapTeacherClass );
router.post('/admin/student/:studentId/class/:classId', authMiddleware.adminAuth , mapStudentClass );




module.exports = router;