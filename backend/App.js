// app.js

// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');  
const nodemailer = require('nodemailer');

// Create an Express app
const app = express(); 
const port = 3000;  

// Middleware to parse JSON bodies
app.use(bodyParser.json());   

// MySQL database connection
const db = mysql.createConnection({  
  host: 'localhost',  
  user: 'root', 
  password: '', 
  database: 'yatra'     
});

db.connect((err) => {  
  if (err) {
    console.error('Error connecting to MySQL:', err);   
    return;   
  }
  console.log('Connected to MySQL');     
});

// Nodemailer transporter for sending emails
const transporter = nodemailer.createTransport({  
  service: 'gmail',  
  auth: {  
    user: 'your_email@gmail.com', 
    pass: 'your_email_password'  
  } 
}); 

// Admin APIs
app.post('/api/admin/login', (req, res) => { 
  // Implement login logic
}); 
 
app.post('/api/admin/logout', (req, res) => {   
  // Implement logout logic
}); 

app.post('/api/admin/edit-profile', (req, res) => {  
  // Implement edit profile logic
});

// Corporate APIs
app.post('/api/corporate/add', (req, res) => {    
  // Implement add corporate logic
});  

app.post('/api/corporate/edit', (req, res) => {  
  // Implement edit corporate logic
});  

app.post('/api/corporate/delete', (req, res) => { 
  // Implement delete corporate logic
}); 

// Customer APIs
app.post('/api/customer/add', (req, res) => {  
  // Implement add customer logic
}); 

app.post('/api/customer/edit', (req, res) => {    
  // Implement edit customer logic
});

app.post('/api/customer/delete', (req, res) => {  
  // Implement delete customer logic
});

// Booking APIs
app.post('/api/booking/add', (req, res) => { 
  // Implement add booking logic
  // Send email to all parties
});

app.post('/api/booking/edit', (req, res) => {
  // Implement edit booking logic
  // Send email to all parties
});

app.post('/api/booking/delete', (req, res) => {  
  // Implement delete booking logic
  // Send email to all parties
}); 

// Start the server
app.listen(port, () => {   
  console.log(`Server running on port ${port}`);
}); 
