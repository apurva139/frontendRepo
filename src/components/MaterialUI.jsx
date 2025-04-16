import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, width: 400, margin: 'auto', mt: 8 }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        <Button variant="text">Text</Button>
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        <Avatar
       alt="Remy Sharp"
       src="/static/images/avatar/1.jpg"
       sx={{ width: 24, height: 24 }}
       />
       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Box>
    </Paper>
  );
};

export default LoginForm;
