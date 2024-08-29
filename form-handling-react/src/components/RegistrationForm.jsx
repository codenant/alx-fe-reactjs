import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateErrors = {};
    if (formData.username.trim() === "") {
      validateErrors.username = "Username is required";
    }

    if (formData.email.trim() === "") {
      validateErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validateErrors.email = "Enter a valid email format";
    }

    if (formData.password.trim() === "") {
      validateErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      validateErrors.password = "Password must be longer than 8 characters";
    }

    setErrors(validateErrors);
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "6px" }}
    >
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      {errors.username && (
        <span style={{ color: "red" }}>{errors.username}</span>
      )}
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && (
        <span style={{ color: "red" }}>{errors.password}</span>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
