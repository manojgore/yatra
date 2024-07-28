import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import logo from './logo.svg'; 
import './App.css'; 
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Fleet from './components/Fleet';
import Footer from './components/Footer';         
import BrowseByType from './components/BrowseByType';     
// import Dashboard from './components/Admin/Dashboard';

function App() {  
  return (    
    <> 
    {/* <AppContent /> */}  
    <Navbar />  
    <Banner />    
    <BrowseByType />  
    <Fleet />  
    <Footer />
    </>
  );
}


// function AppContent() {

//   return (
//     <>
//       <Router>
//         {/* Define routes for admin module */}
//         <Route path="/admin/dashboard" element={<Dashboard />} />

//         {/* Add routes for other modules if needed */}
//         {/* 
//         <Route path="/user/*" element={<UserRoutes />} />
//         <Route path="/user/home" element={<Home />} /> */}
//       </Router>
//     </>
//   );
// }


export default App;
