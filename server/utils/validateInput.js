module.exports.validateRegisterInput = (
    name,
    email,
    password,
  ) => {
    const errors = {};
    if (name.trim() === '') {
      errors.name = 'Username must not be empty';
    }
    if (email.trim() === '') {
      errors.email = 'Email must not be empty';
    } else {
      const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
      if (!email.match(regEx)) {
        errors.email = 'Email must be a valid email address';
      }
    }
    if (password === '') {
      errors.password = 'Password must not empty';
    } 
  
    return {
      errors,
      valid: Object.keys(errors).length < 1
    };
  };
  
  module.exports.validateLoginInput = (name, password) => {
    const errors = {};
    if (name.trim() === '') {
      errors.name = 'Username must not be empty';
    }
    if (password.trim() === '') {
      errors.password = 'Password must not be empty';
    }
  
    return {
      errors,
      valid: Object.keys(errors).length < 1
    };
  };