import { useForm } from "../hooks/useForm";
import "../styles/Register.css";

export const Register = () => {
  const {
    formState,
    username,
    email,
    password,
    firstname,
    lastname,
    handleChange,
    handleReset,
  } = useForm({
    username: "",
    age: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault(), console.log(formState), handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-5 text-primary">Register</h2>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        required
        onChange={handleChange}
      />

      <input
        type="text"
        name="email"
        placeholder="email"
        value={email}
        required
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        required
        onChange={handleChange}
      />

      <input
        type="text"
        name="firstname"
        placeholder="firstname"
        value={firstname}
        required
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastname"
        placeholder="lastname"
        value={lastname}
        required
        onChange={handleChange}
      />

      <button type="submit"> Registrarse </button>
    </form>
  );
};
