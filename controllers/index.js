const { Status, Message } = require("../constants");
const Course = require("../models/courses");
const User = require("../models/users");




exports.SignUp= async (req, res) => {
    try {
      const { username, email, password, role } = req.body;
      console.log('req.body====>',req.body)
  
    
      if (!username || !email || !password || !role) {
        return res.json({status:Status.Failed, message: 'All fields are required.' });
      }
  
     
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.json({status:Status.Failed, message: 'User with this email already exists.' });
      }
  
      
      const newUser = await User.create({
        username,
        email,
        password,
        role,
      });
  
     return res.json({
        status:Status.Success,
        message: 'User registered successfully!',
       
      });
    } catch (error) {
      console.log('error=>', error.message);
      return res.status(500).json({ status:Status.Failed,message: Message.ServerError });
    }
  }
  


  exports.Login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
     
      if (!email || !password) {
        return res.json({ status: Status.Failed, message: 'Email and password are required.' });
      }
  
    
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.json({ status: Status.Failed, message: 'User not found.' });
      }
  
    
      if (user.password !== password) {
        return res.json({ status: Status.Failed, message: 'Invalid username or password.' });
      }
  
    
     return res.json({
        status: Status.Success,
        message: 'Login successful!',
        data: user,
        
      });
    } catch (error) {
      console.log('error=>', error.message);
     return res.status(500).json({ status: Status.Failed, message: Message.ServerError });
    }
  };
  

  exports.createCourse = async (req, res) => {
    try {
      const { name, description, duration, price } = req.body;
  
     
      if (!name || !description || !duration || !price) {
        return res.json({ status: Status.Failed, message: 'All fields are required.' });
      }
  
     
      const existingCourse = await Course.findOne({ where: { name } });
      if (existingCourse) {
        return res.json({ status: Status.Failed, message: 'Course with this name already exists.' });
      }
  
    
      const newCourse = await Course.create({
        name,
        description,
        duration,
        price,
      });
  
      return res.json({
        status: Status.Success,
        message: 'Course created successfully!',
        course: newCourse, 
      });
    } catch (error) {
      console.log('error=>', error.message);
      return res.status(500).json({ status: Status.Failed, message: Message.ServerError});
    }
  };
  
  exports.getCourses = async (req, res) => {
    try {
      
      const courses = await Course.findAll();
  
     
      if (courses.length === 0) {
        return res.json({ status: Status.Failed, message: 'No courses found.' });
      }
  
      return res.json({
        status: Status.Success,
        message: 'Courses fetched successfully!',
        courses,
      });
    } catch (error) {
      console.log('error=>', error.message);
      return res.status(500).json({
        status: Status.Failed,
        message: Message.ServerError,
      });
    }
  };
  

  exports.deleteCourse = async (req, res) => {
    try {
      const { id } = req.body; 
      if (!id) {
        return res.json({status:Status.Failed, message: 'id is required.' });
      }
   
      const course = await Course.findOne({ where: { id } });
      if (!course) {
        return res.json({ status: Status.Failed, message: 'Course not found.' });
      }
  
     
      await course.destroy();
  
      return res.json({
        status: Status.Success,
        message: 'Course deleted successfully!',
      });
    } catch (error) {
      console.log('error=>', error.message);
      return res.status(500).json({
        status: Status.Failed,
        message: Message.ServerError,
      });
    }
  };
  

  exports.updateCourse = async (req, res) => {
    try {
      const { id, ...updateFields } = req.body; 
  console.log('updateFields====>',updateFields)
      if (!id) {
        return res.json({ status: Status.Failed, message: 'id is required.' });
      }
  
      const course = await Course.findOne({ where: { id } });
      console.log('course====>',course)
      if (!course) {
        return res.json({ status: Status.Failed, message: 'Course not found.' });
      }
  
     
      await Course.update(updateFields, { where: { id } });
  
      return res.json({
        status: Status.Success,
        message: 'Course updated successfully!',
      });
    } catch (error) {
      console.log('error=>', error.message);
      return res.status(500).json({
        status: Status.Failed,
        message: Message.ServerError,
      });
    }
  };
  
  




