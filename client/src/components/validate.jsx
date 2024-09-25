
//signin formValidate
const validateSignin = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name field is required.";
  }

  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email field is invalid.";
  }

  if (!values.password) {
    errors.password = "Password field is required.";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }

  return errors;
};

export default validateSignin;
