import { useState } from "react";
import "./login.css";
import axios from "axios";

export default function Login() {
  //  quero receber um objeto para passar apra dentro do data
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // CREATE users quando usuario der submit
  async function createUser(event: any) {
    event.preventDefault();

    console.log(`Nome:  ${data.name} - Email:  ${data.email} Senha: ${data.password}`);

    // indicar o formato que estou passando
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // tratar o envio para API
    await axios
      .post("http://localhost:3333/cadastrar", data, headers)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => setMessage(error.data.message));
  }

  //  Receber os dados dos campos do formulario
  function valorInput(event: any) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  return (
    <div className="container">
      <div className="content">
        <div className="login-diver">
          <h1>Login</h1>

          <form onSubmit={createUser}>
            <label htmlFor="">Nome:</label>
            <input
              type="text"
              name="name"
              onChange={valorInput}
              placeholder="seu nome"
              required
            />

            <label htmlFor="">E-mail:</label>
            <input
              type="text"
              name="email"
              onChange={valorInput}
              placeholder="digite seu email"
              required
            />

            <label htmlFor="">Senha:</label>
            <input
              type="text"
              name="password"
              onChange={valorInput}
              placeholder="sua senha"
              required
            />

            <button>Enviar</button>
          </form>

          {message ? <p>{message}</p> : ""}
        </div>
      </div>
    </div>
  );
}
