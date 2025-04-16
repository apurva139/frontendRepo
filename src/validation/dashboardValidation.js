// // This function validates the response data from the API
// const dashboardValidation = (data) => {
//     if (!Array.isArray(data)) {
//       return 'Invalid data format: expected an array of users.';
//     }
  
//     for (let i = 0; i < data.length; i++) {
//       const user = data[i];
  
//       // Basic field presence checks
//       if (!user.email || !user.username) {
//         return `Missing required fields in user at index ${i}`;
//       }
  
//       // Optional: Validate data types (example: age should be a number)
//       if (user.age && isNaN(Number(user.age))) {
//         return `Invalid age for user at index ${i}`;
//       }
  
//       // Optional: Validate email format
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(user.email)) {
//         return `Invalid email format for user at index ${i}`;
//       }
//     }
  
//     return null; // No validation error
//   };
  
//   export default dashboardValidation;
  