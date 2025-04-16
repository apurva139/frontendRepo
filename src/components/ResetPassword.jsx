// import React, { useState } from 'react';
// import { changeUserPassword } from '../services/api';
// import resetPasswordValidation from '../validation/resetPasswordValidation';
// import { useNavigate } from 'react-router-dom';
// import './ResetPassword.css'; // Import the CSS file

// const ChangePassword = () => {
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     setError('');
//     setMessage('');

//   const errors = resetPasswordValidation({
//       old_password: oldPassword,
//       new_password: newPassword,
//     });

//     if (Object.keys(errors).length > 0) {
//       setError(Object.values(errors)[0]);
//       return;
//     }

//     try {
//       // const token = localStorage.getItem('access_token');
//       const response = await changeUserPassword(
//         { old_password: oldPassword, new_password: newPassword },
//         // {
//         //   headers: {
//         //     Authorization: `Bearer ${token}`,
//         //   },
//         // }
//       );
//       setMessage(response.data.message || 'Password changed successfully!');
//       setOldPassword('');
//       setNewPassword('');

//       setTimeout(() => {
//         navigate('/login');
//       }, 1000);
//     } catch (err) {
//       setError(err.response?.data?.error || 'Password reset failed.');
//     }
//   };

//   return (
//     <div className="reset-container">
//       <div className="reset-card">
//         <form onSubmit={handleResetPassword} className="reset-form">
//           <h2 className="reset-title">Reset Password</h2>
  
//           {message && <p className="reset-success-message">{message}</p>}
//           {error && <p className="reset-error-message">{error}</p>}
  
//           <div className="form-group">
//             <label>Old Password</label>
//             <input
//               type="password"
//               value={oldPassword}
//               onChange={(e) => setOldPassword(e.target.value)}
//               className="form-input"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>New Password</label>
//             <input
//               type="password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className="form-input"
//               required
//             />
//           </div>

  
//           <button type="submit" className="reset-button">
//             Reset Password
//           </button>
  
//           <div className="login-link">
//             Login: <a href="/login" style={{color:"#7c3aed"}}>Login here</a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ChangePassword;

import React, { useState } from 'react';
import { changeUserPassword } from '../services/api';
import resetPasswordValidation from '../validation/resetPasswordValidation';
import { useNavigate } from 'react-router-dom';
import { 
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Container
} from '@mui/material';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

  const errors = resetPasswordValidation({
      old_password: oldPassword,
      new_password: newPassword,
    });

    if (Object.keys(errors).length > 0) {
      setError(Object.values(errors)[0]);
      return;
    }

    try {
      const response = await changeUserPassword({
        old_password: oldPassword,
        new_password: newPassword
      });
      
      setMessage(response.data.message || 'Password changed successfully!');
      setOldPassword('');
      setNewPassword('');

      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.error || 'Password reset failed.');
    }
  };

  return (
    <Container maxWidth="xs" sx={{
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Box sx={{
        width: '100%',
        p: 4,
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderRadius: 2
      }}>
        <form onSubmit={handleResetPassword}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 4
          }}>
            Reset Password
          </Typography>

          

          {message && (
            <Typography color="success.main" sx={{ mb: 2 }}>
              {message}
            </Typography>
          )}
          {error && (
            <Typography color="error.main" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <TextField
            fullWidth
            label="Old Password"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
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
            Reset Password
          </Button>

          <Typography variant="body2" sx={{ 
            textAlign: 'center',
            mt: 2
          }}>
            Login: {' '}
            <Link href="/login" color="primary">
              Login here
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default ChangePassword;