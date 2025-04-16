// import React, { useState } from 'react';
// import { loginUser } from '../services/api';
// import { useNavigate } from 'react-router-dom';
// // import './Login.css';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   IconButton,
//   Popover,
//   Typography,
//   Pagination,
//   Stack,
//   InputAdornment,
//   Button
// } from '@mui/material';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await loginUser({ email, password });
//       const data = response.data;

//       localStorage.setItem('access_token', data.access);
//       localStorage.setItem('refresh_token', data.refresh);
//       localStorage.setItem('username', data.username);
//       localStorage.setItem('email', data.email);
//       localStorage.setItem('role', data.role);
//       localStorage.setItem('user_id', data.user_id);

//       alert('Login successful!');
//       navigate('/table-data');
//     } catch (error) {
//       console.error('Login failed:', error.response?.data || error.message);
//       alert('Login failed! Please check your email and password.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleLogin} className="login-form">
//         <h2 className="login-title">Login</h2>

//         <div className="form-group">
//           <label htmlFor="email" className="form-label">Email</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter your email"
//             className="form-input"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
       
//         <div className="form-group">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter your password"
//             className="form-input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <br></br>

//         <button type="submit" className="login-button">
//           Login
//         </button>

//         <p className="link-text">
//           Don't have an account?{' '}
//           <a href="/register" className="link">Register here</a>
//         </p>

//         <p className="link-text">
//           Reset Password:{' '}
//           <a href="/resetPassword" className="link">Reset Password here</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Container
} from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      const data = response.data;

      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      localStorage.setItem('username', data.username);
      localStorage.setItem('email', data.email);
      localStorage.setItem('role', data.role);
      localStorage.setItem('user_id', data.user_id);

      alert('Login successful!');
      navigate('/table-data');
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert('Login failed! Please check your email and password.');
    }
  };

  return (
    <Container maxWidth="xs" sx={{
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      // bgcolor: '#f5f5f5'
    }}>
      <Box sx={{
        width: '100%',
        p: 4,
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderRadius: 2
      }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ 
          textAlign: 'center', 
          mb: 4,
          fontWeight: 'bold'
        }}>
          Login
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            sx={{ mt: 3 }}
          >
            Login
          </Button>

          <Typography variant="body2" sx={{ 
            textAlign: 'center', 
            mt: 2,
            color: 'text.secondary'
          }}>
            Don't have an account?{' '}
            <Link href="/register" color="primary">
              Register here
            </Link>
          </Typography>

          <Typography variant="body2" sx={{ 
            textAlign: 'center', 
            mt: 1,
            color: 'text.secondary'
          }}>
            Forgot password?{' '}
            <Link href="/resetpassword" color="primary">
              Reset Password
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default Login;