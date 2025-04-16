import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  Popover,
  Typography,
  Pagination,
  Stack,
  InputAdornment,
  Button
} from '@mui/material';



const MaterialUITable = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [rowPerPage, setRowPerPage] = useState(5);
  const [tempRowPerPage, setTempRowPerPage] = useState('5');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [nameFilter, setNameFilter] = useState('');
  const [sortOrder, setSortOrder] = useState(null);

  const username = localStorage.getItem('username');
  const initial = username.charAt(0).toUpperCase() || '';
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      navigate('/login');
      return;
    }

  const fetchUsers = async () => {
      try {
        const res = await getAllUsers(searchTerm, rowPerPage, currentPage, nameFilter);
        setUsers(res.data);
      } catch (error) {
        console.error('Failed to fetch users', error);
        navigate('/login');
      }
    };
    fetchUsers();
  }, [navigate, searchTerm, rowPerPage, currentPage, nameFilter]);

  const handleRowPerPageChange = (e) => {
    const value = e.target.value;
    setTempRowPerPage(value);
    const numValue = Number(value);
    if (numValue >= 1 && numValue <= users?.count) {
      setErrorMessage('');
      setRowPerPage(numValue);
      setCurrentPage(1);
    } else {
      setErrorMessage(`Enter a value between 1 to ${users?.count}`);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNameFilterChange = async (e) => {
    const value = e.target.value;
    setNameFilter(value);
    try {
      const res = await getAllUsers(searchTerm, rowPerPage, currentPage,value);
      setUsers(res.data);
    } catch (error) {
      console.error('Failed to fetch users', error);
    }
  };

  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    setUsers((prevUsers) => {
      const sorted = [...prevUsers.results].sort((a, b) => {
        return sortOrder === 'asc'
          ? b.first_name.localeCompare(a.first_name)
          : a.first_name.localeCompare(b.first_name);
      });
      return { ...prevUsers, results: sorted };
    });
    handleMenuClose();
  };
    
  return ( 
    <Box sx={{ p: 2 }}>
    {/* Top Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
          backgroundColor: '#f5f5f5',
          p: 1.5,
          borderRadius: '10px',
          boxShadow: 3,
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <img src="/logo192.png" alt="Logo" style={{ height: '30px' }} />
          <Typography variant="h6" color="textSecondary">
            {username}
          </Typography>
        </Box>
        <Avatar sx={{ bgcolor: '#1a4f8b', width: 30, height: 30 }}>{initial}</Avatar>
      </Box>

      {/* Heading & Search */}
      <Typography variant="h5" gutterBottom mt={3}>
        User Dashboard
      </Typography>

      <TextField
        placeholder="Search by First/Last Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2, width: { xs: '100%', sm: '260px' } }}
      />

      {errorMessage && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMessage}
        </Alert>
      )}

      {/* Table Container */}
      <Box sx={{ width: '100%', overflowX: 'auto' }}>
        <TableContainer component={Paper} sx={{ minWidth: 800 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    First Name
                    <IconButton onClick={handleMenuOpen}>
                      <BsThreeDotsVertical />
                    </IconButton>
                    <Popover
                      open={Boolean(anchorEl)}
                      anchorEl={anchorEl}
                      onClose={handleMenuClose}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >
                      <Box p={2} width={200}>
                        <TextField
                          label="Search by Name"
                          variant="outlined"
                          size="small"
                          fullWidth
                          value={nameFilter}
                          onChange={handleNameFilterChange}
                          autoFocus
                        />
                        <Typography
                          onClick={handleSort}
                          sx={{
                            cursor: 'pointer',
                            mt: 1,
                            textAlign: 'center',
                          }}
                        >
                          Sort by Name {sortOrder === 'asc' ? '🔼' : '🔽'}
                        </Typography>
                      </Box>
                    </Popover>
                  </Box>
                </TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>DOB</TableCell>
                <TableCell>Emp Code</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Is Admin</TableCell>
                <TableCell>Is Active</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.results?.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.first_name}</TableCell>
                  <TableCell>{user.last_name}</TableCell>
                  <TableCell>{user.dob}</TableCell>
                  <TableCell>{user.empCode}</TableCell>
                  <TableCell>{user.mobile}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.isAdmin ? 'Yes' : 'No'}</TableCell>
                  <TableCell>{user.isActive ? 'Active' : 'Inactive'}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    {/* Pagination & Row Count */}
      <Box
        sx={{
          mt: 3,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
        }}
      >
      <TextField
        type="number"
        label="Rows per Page"
        value={tempRowPerPage}
        onChange={handleRowPerPageChange}
        size="small"
        sx={{ width: { xs: '100%', sm: '150px' } }}
      />

      <Pagination
        count={Math.ceil(users?.count / rowPerPage)}
        page={currentPage}
        onChange={(e, value) => setCurrentPage(value)}
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
      />
      </Box>
    </Box>
  );
};

export default MaterialUITable;