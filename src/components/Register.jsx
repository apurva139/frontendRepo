// import React, { useState } from 'react';
// import { registerUser } from '../services/api';
// import { validateRegister } from '../validation/registerValidation';
// import './Register.css';

// function Register() {
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     dob: '',
//     empCode: '',
//     mobile: '',
//     age: '',
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//     isAdmin: false,
//     isActive: '',
//     role: 'student'
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateRegister(formData);
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       await registerUser(formData);
//       alert('Registered successfully!');
//       setFormData({
//         first_name: '',
//         last_name: '',
//         dob: '',
//         empCode: '',
//         mobile: '',
//         age: '',
//         email: '',
//         username: '',
//         password: '',
//         confirmPassword: '',
//         isAdmin: false,
//         isActive: '',
//         role: 'student'
//       });
//     } catch (error) {
//       console.error('Registration Error:', error);
//       alert('Failed to register. Please check your details.');
//     }
//   };

//   return (
   
//     <form onSubmit={handleSubmit}>
//       <h2>Register</h2>

//       <div className="form-grid">
//         <div>
//           <label>First Name</label>
//           <input name="first_name" placeholder="Enter your first name" value={formData.first_name} onChange={handleChange} />
//           {errors.first_name && <p>{errors.first_name}</p>}
//         </div>

//         <div>
//           <label>Last Name</label>
//           <input name="last_name" placeholder="Enter your last name" value={formData.last_name} onChange={handleChange} />
//           {errors.last_name && <p>{errors.last_name}</p>}
//         </div>

//         <div>
//           <label>Date of Birth</label>
//           <input name="dob" type="date" value={formData.dob} onChange={handleChange} />
//           {errors.dob && <p>{errors.dob}</p>}
//         </div>

//         <div>
//           <label>Employee Code</label>
//           <input name="empCode" placeholder="Enter employee code" value={formData.empCode} onChange={handleChange} />
//           {errors.empCode && <p>{errors.empCode}</p>}
//         </div>

//         <div>
//           <label>Mobile Number</label>
//           <input name="mobile" placeholder="Enter your mobile" value={formData.mobile} onChange={handleChange} />
//           {errors.mobile && <p>{errors.mobile}</p>}
//         </div>

//         <div>
//           <label>Age</label>
//           <input name="age" placeholder="Enter your age" value={formData.age} onChange={handleChange} />
//           {errors.age && <p>{errors.age}</p>}
//         </div>

//         <div>
//           <label>Email</label>
//           <input name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
//           {errors.email && <p>{errors.email}</p>}
//         </div>

//         <div>
//           <label>Username</label>
//           <input name="username" placeholder="Enter your username" value={formData.username} onChange={handleChange} />
//           {errors.username && <p>{errors.username}</p>}
//         </div>

//         <div>
//           <label>Password</label>
//           <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
//           {errors.password && <p>{errors.password}</p>}
//         </div>

//         <div>
//           <label>Confirm Password</label>
//           <input type="password" name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} />
//           {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
//         </div>
//       </div>

//       <div className="radio-group">
//         <label>
//           <input type="checkbox" name="isAdmin" checked={formData.isAdmin} onChange={handleChange} />
//           Admin
//         </label> 
//      </div>
//      <br />
//      <div>
//      <label>Status : </label>
//         <label>
//           <input type="radio" name="isActive" value="active" checked={formData.isActive === 'active'} onChange={handleChange} />
//           Active
//         </label>

//         <label>
//           <input type="radio" name="isActive" value="inactive" checked={formData.isActive === 'inactive'} onChange={handleChange} />
//           Inactive
//         </label>

//         {errors.isActive && <p>{errors.isActive}</p>}
//       </div>

//       <div style={{ marginTop: '20px' }}>
//         <label>Role : </label>
//         <select name="role" value={formData.role} onChange={handleChange}>
//           <option value="admin">Admin</option>
//           <option value="manager">Manager</option>
//           <option value="student">Student</option>
//         </select>
//       </div>

//       <button type="submit">Register</button>

//     {/* Login again */}
//       <p className="mt-6 text-center text-sm text-gray-600">
//           Login:{' '}
//           <a href="/login" className="text-purple-700 font-medium underline">
//             Login here
//           </a>
//       </p>

//     </form>


//   );
// }

// export default Register;


// import React, { useState } from 'react';
// import { registerUser } from '../services/api';
// import { validateRegister } from '../validation/registerValidation';
// import './Register.css';
// import Checkbox from '@mui/material/Checkbox';
// import {
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Autocomplete, TextField
// } from '@mui/material';

// function Register() {
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     dob: '',
//     empCode: '',
//     mobile: '',
//     age: '',
//     email: '',
//     username: 'Adityapatl@gmail.com',
//     password: '',
//     confirmPassword: '',
//     isAdmin: false,
//     isActive: '',
//     role: 'student'
//   }); 

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     console.log(e.target,"---=========")
//     const { name, value, type, checked } = e.target;

//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   console.log(formData,"-------------form")

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateRegister(formData);
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       await registerUser(formData);
//       alert('Registered successfully!');
//       // Reset form except username
//       setFormData(prev => ({
//         ...prev,
//         first_name: '',
//         last_name: '',
//         dob: '',
//         empCode: '',
//         mobile: '',
//         age: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         isAdmin: false,
//         isActive: '',
//         role: 'student'
//       }));
//     } catch (error) {
//       console.error('Registration Error:', error);
//       alert('Failed to register. Please check your details.');
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-card">
//         <form onSubmit={handleSubmit} className="register-form">
//           <h2 className="register-title">Register</h2>

//           <div className="form-grid">
//             <div className="form-group">
//               <label>First Name</label>
//               <input 
//                 name="first_name" 
//                 placeholder="Enter your first name" 
//                 value={formData.first_name} 
//                 onChange={handleChange}
//                 className="form-input"
//               />
//               {errors.first_name && <p className="error-message">{errors.first_name}</p>}
//             </div>

//             <div className="form-group">
//               <label>Last Name</label>
//               <input 
//                 name="last_name" 
//                 placeholder="Enter your last name" 
//                 value={formData.last_name} 
//                 onChange={handleChange}
//                 className="form-input"
//               />
//               {errors.last_name && <p className="error-message">{errors.last_name}</p>}
//             </div>

//             <div className="form-group">
//               <label>Date of Birth</label>
//               <input 
//                 name="dob" 
//                 type="date" 
//                 value={formData.dob} 
//                 onChange={handleChange}
//                 className="form-input"
//               />
//               {errors.dob && <p className="error-message">{errors.dob}</p>}
//             </div>

//             <div className="form-group">
//               <label>Employee Code</label>
//               <input 
//                 name="empCode" 
//                 placeholder="Enter employee code" 
//                 value={formData.empCode} 
//                 onChange={handleChange}
//                 className="form-input"
//               />
//               {errors.empCode && <p className="error-message">{errors.empCode}</p>}
//             </div>

//             <div className="form-group">
//               <label>Mobile Number</label>
//               <input 
//                 name="mobile" 
//                 placeholder="Enter your mobile" 
//                 value={formData.mobile} 
//                 onChange={handleChange}
//                 className="form-input"
//               />
//               {errors.mobile && <p className="error-message">{errors.mobile}</p>}
//             </div>

//             <div className="form-group">
//               <label>Age</label>
//               <input 
//                 name="age" 
//                 placeholder="Enter your age" 
//                 value={formData.age} 
//                 onChange={handleChange}
//                 className="form-input"
//               />
//               {errors.age && <p className="error-message">{errors.age}</p>}
//             </div>

//             <div className="form-group">
//               <label>Email</label>
//               <input 
//                 name="email" 
//                 placeholder="Enter your email" 
//                 value={formData.email} 
//                 onChange={handleChange}
//                 className="form-input"
//               />
//               {errors.email && <p className="error-message">{errors.email}</p>}
//             </div>

//             <div className="form-group">
//               <label>Username</label>
//               <input 
//                 name="username" 
//                 placeholder="Enter your username" 
//                 value={formData.username} 
//                 onChange={handleChange}
//                 className="form-input"
//               />
//               {errors.username && <p className="error-message">{errors.username}</p>}
//             </div>

//             <div className="form-group">
//               <label>Password</label>
//               <input 
//                 type="password" 
//                 name="password" 
//                 placeholder="Enter your password" 
//                 value={formData.password} 
//                 onChange={handleChange}
//                 className="form-input"
//               />
//               {errors.password && <p className="error-message">{errors.password}</p>}
//             </div>

//             <div className="form-group">
//               <label>Confirm Password</label>
//               <input 
//                 type="password" 
//                 name="confirmPassword" 
//                 placeholder="Confirm your password" 
//                 value={formData.confirmPassword} 
//                 onChange={handleChange}
//                 className="form-input"
//               />
//               {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
//             </div>
//           </div>

//           {/* <div className="checkbox-group">
//             <label className="checkbox-label">
//               <input 
//                 type="checkbox" 
//                 name="isAdmin" 
//                 checked={formData.isAdmin} 
//                 onChange={handleChange}
//                 className="checkbox-input"
//               />
//               Admin
//             </label> 

//           </div> */}
//           <FormControlLabel
//             control={
//               <Checkbox
//                 name="isAdmin"
//                 checked={formData.isAdmin}
//                 onChange={handleChange}
//               />
//             }
//             label="Admin"
//           />
//           <br></br>
//           {/* <div className="radio-group">
//             <label className="radio-label">Status : </label>
//             <label className="radio-option">
//               <input 
//                 type="radio" 
//                 name="isActive" 
//                 value="active" 
//                 checked={formData.isActive === 'active'} 
//                 onChange={handleChange}
//                 className="radio-input"
//               />
//               Active
//             </label>

//             <label className="radio-option">
//               <input 
//                 type="radio" 
//                 name="isActive" 
//                 value="inactive" 
//                 checked={formData.isActive === 'inactive'} 
//                 onChange={handleChange}
//                 className="radio-input"
//               />
//               Inactive
//             </label>
//             {errors.isActive && <p className="error-message">{errors.isActive}</p>}
//           </div> */}

//           <FormControl component="fieldset" sx={{ mb: 2 }}>
//             <FormLabel component="legend">Status</FormLabel>
//             <RadioGroup
//               row
//               name="isActive"
//               value={formData.isActive}
//               onChange={handleChange}
//             >
//               <FormControlLabel
//                 value="active"
//                 control={<Radio />}
//                 label="Active"
//               />
//               <FormControlLabel
//                 value="inactive"
//                 control={<Radio />}
//                 label="Inactive"
//               />
//             </RadioGroup>
//             {errors.isActive && (
//               <p className="error-message" style={{ color: 'red', fontSize: '0.8rem' }}>
//                 {errors.isActive}
//               </p>
//             )}
//           </FormControl>


//           {/* <div className="select-group">
//             <label className="select-label">Role : </label>
//             <select 
//               name="role" 
//               value={formData.role} 
//               onChange={handleChange}
//               className="select-input"
//             >
//               <option value="admin">Admin</option>
//               <option value="manager">Manager</option>
//               <option value="student">Student</option>
//             </select>
//           </div> */}

//           <Autocomplete
//             disablePortal
//             options={['Admin', 'Manager', 'Student']}
//             value={formData.role}
//             onChange={(event, newValue) => {
//               setFormData({ ...formData, role: newValue });
//             }}
//             renderInput={(params) => (
//               <TextField
//                 {...params}
//                 label="Role"
//                 variant="outlined"
//                 size="small"
//               />
//             )}
//             sx={{ width: 150, mb: 2 }} // optional styling
//           />


//           <button type="submit" className="register-button">
//             Register
//           </button>

//           <div className="login-link">
//             Login: <a href="/login" style={{color:"#7c3aed"}}>Login here</a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { validateRegister } from '../validation/registerValidation';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Grid,
  Typography,
  Link,
  MenuItem,
   Paper,
   Select,
   InputLabel,


} from '@mui/material';

function Register() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    empCode: '',
    mobile: '',
    age: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    isAdmin: false,
    isActive: '',
    role: 'student'
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateRegister(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await registerUser(formData);
      alert('Registered successfully!');
      setFormData(prev => ({
        ...prev,
        first_name: '',
        last_name: '',
        dob: '',
        empCode: '',
        mobile: '',
        age: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAdmin: false,
        isActive: '',
        role: 'student'
      }));
    } catch (error) {
      console.error('Registration Error:', error);
      alert('Failed to register. Please check your details.');
    }
  };

  return (
    <Box sx={{ maxWidth: 480, mx: 'auto', mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="First Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="date"
                label="Date of Birth"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                size="medium"
                sx={{
                  '& input': {
                    height: '1.4375em', // Matches default TextField input height
                    padding: '16.5px 14px',
                    width:"166px"

                  }
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Employee Code"
                name="empCode"
                value={formData.empCode}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                // autoComplete="off"
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.isAdmin}
                    onChange={handleChange}
                    name="isAdmin"
                  />
                }
                label="Admin"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel>Status</FormLabel>
                <RadioGroup
                  name="isActive"
                  value={formData.isActive}
                  onChange={handleChange}
                >
                  <FormControlLabel value="active" control={<Radio />} label="Active" />
                  <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                size="medium"
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="manager">Manager</MenuItem>
                <MenuItem value="student">Student</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginLeft: "100px"
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  sx={{ mt: 2, px: 5 }}
                >
                  Register
                </Button>

                <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary', textAlign: 'center' }}>
                  Already have an account?{' '}
                  <Link href="/login" color="primary">
                    Login here
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default Register;