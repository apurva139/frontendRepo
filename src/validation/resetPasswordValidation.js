export default function validateResetPassword(values) {
  const errors = {};
  
  // Old Password validation
  if (!values.old_password) {
    errors.old_password = 'Old password is required';
  } else if (values.old_password.length < 6) {
    errors.old_password = 'Old password must be at least 6 characters';
  }

  // New Password validation
  if (!values.new_password) {
    errors.new_password = 'New password is required';
  } else if (values.new_password.length < 8) {
    errors.new_password = 'New password must be at least 8 characters';
  } else if (!/[A-Z]/.test(values.new_password)) {
    errors.new_password = 'New password must contain at least one uppercase letter';
  } else if (!/[a-z]/.test(values.new_password)) {
    errors.new_password = 'New password must contain at least one lowercase letter';
  } else if (!/[0-9]/.test(values.new_password)) {
    errors.new_password = 'New password must contain at least one number';
  } else if (!/[^A-Za-z0-9]/.test(values.new_password)) {
    errors.new_password = 'New password must contain at least one special character';
  }

  // Additional check if new password is same as old
  if (values.old_password && values.new_password && 
      values.old_password === values.new_password) {
    errors.new_password = 'New password must be different from old password';
  }

  return errors;
}