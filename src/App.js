import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ChangePassword from './components/ResetPassword';
import TableComp from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from './components/MaterialUI';
import MaterialUITable from './components/Dashboard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/resetPassword" element={<ChangePassword />} />
//         <Route path="/table-data" element={<TableComp />} />

//       </Routes>
//     </Router>
//   );
// }

function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login" element={<LoginForm />} /> */}

        <Route 
        path='/resetPassword' element={
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        }
        />
        <Route 
        path='/table-data'
        element ={
          <ProtectedRoute>
            {/* <TableComp /> */}
            <MaterialUITable />
          </ProtectedRoute>
        }
        />
      </Routes>
    </Router>

  )
}

export default App;
