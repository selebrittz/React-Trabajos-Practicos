import { useForm } from "../hooks/useForm";
import "../styles/Login.css";

export const Login = ({ onLogin }) => {
  const { formState, email, password, handleChange, handleReset } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    onLogin(email);
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-5 text-primary">Login</h2>
      <input
        type="email"
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

      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

// En React, cuando tenés un formulario, por defecto al hacer submit (apretar el botón de enviar), la página se recarga.
//  Para evitar eso, usamos handleSubmit.

// Ejemplo de handleSubmit en tu Login:
// const handleSubmit = (event) => {
//   event.preventDefault(); // Evita que la página se recargue
//   console.log(formState); // Muestra los valores actuales del formulario
//   handleReset();           // Limpia los inputs
