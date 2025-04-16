// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://127.0.0.1:8000/api/', 
// });

// // Register User
// export const registerUser = (userData) => API.post('register/', userData);

// //Login User
// export const loginUser = (userData) => API.post('login/', userData);

// // Reset password 
// export const changeUserPassword = (userData, config) =>API.post('change-password/', userData, config);

// //Dashboard All user list 
// export const getAllUsers = (token, query, rowPerPage, currentPage, searchName) =>
//   API.get(`users/`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     params:{search:query,search_first_name:searchName, page_size:rowPerPage, page:currentPage}
//   });

// services/api.js


import axios from 'axios';

// Create Axios instance
const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

// Interceptor to attach access token to all requests (except login/register)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  const isAuthRequest = !config.url.includes('login') && !config.url.includes('register');
  if (token && isAuthRequest) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Register User
export const registerUser = (userData) => API.post('register/', userData);

//Login User (no token needed)
export const loginUser = (userData) => API.post('login/', userData);

// Change Password
export const changeUserPassword = (userData) => API.post('change-password/', userData);

// Get All Users (token is handled automatically via interceptor)
export const getAllUsers = (searchTerm, rowPerPage, currentPage, nameFilter) =>
  API.get(`users/`, {
    params: {
      search: searchTerm,
      search_first_name: nameFilter,
      page_size: rowPerPage,
      page: currentPage,
    },
  });
