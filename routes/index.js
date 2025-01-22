const express = require('express');
const {   SignUp, Login, createCourse, getCourses, updateCourse, deleteCourse} = require('../controllers');
const router = express.Router()




router.route('/signup').post(SignUp)
router.route('/login').post(Login)
router.route('/createcourse').post(createCourse)
router.route('/getcourses').post(getCourses)
router.route('/updatecourse').post(updateCourse)
router.route('/deletecourse').post(deleteCourse)

module.exports=router
