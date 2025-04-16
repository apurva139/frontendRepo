export const validateRegister = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
    if (!values.first_name) errors.first_name = "First name is required";
    if (!values.last_name) errors.last_name = "Last name is required";
    if (!values.dob) errors.dob = "Date of Birth is required";
    if (!values.empCode) errors.empCode = "Employee Code is required";
    if (!values.mobile) errors.mobile = "Mobile number is required";
    if (!values.age || isNaN(values.age)) errors.age = "Valid age is required";
    if (!values.email || !emailRegex.test(values.email)) errors.email = "Valid email is required";
    if (!values.username) errors.username = "Username is required";
    if (!values.password) errors.password = "Password is required";
    if (values.password !== values.confirmPassword) errors.confirmPassword = "Passwords do not match";
    if (!values.isActive) errors.isActive = "Please select Active/Inactive";
  
    return errors;
  };
  