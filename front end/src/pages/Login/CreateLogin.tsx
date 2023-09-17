import { useState } from "react";
import "./Create.login.css";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { NavLink } from "react-router-dom";


const APIserver = axios.create({
  baseURL: "http://localhost:3333",
});

// regras de validacao
const createUserFormSchema = z.object({
  name: z.string()
    .nonempty('O nome é obrigatorio')
    .transform(nome => {
      return nome.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }),
  email: z.string()
    .nonempty('O e-mail é obrigatorio')
    .email('Formato de email invalido')
    .toLowerCase(),
  password: z.string()
    .min(8, 'Senha precisa no minimo 8 caracteres'),
})

type createUserFormData = z.infer<typeof createUserFormSchema>

export default function CreateLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm<createUserFormData>({
    // resolver passar nossas regras de validacao do nosso hook
    resolver: zodResolver(createUserFormSchema)
  })

  const [user, setUser] = useState('')

  function createUser(data: createUserFormData) {
    setUser(JSON.stringify(data, null, 2))
    console.log(data)
    submitUser()
  }

  function submitUser() {
    APIserver.post('/create_user', {
      user
    }).then(response => {
      console.log(response)
    }).catch(error => console.log(`Houve algum erro ${error}`))
  }

  return (
    <div className="container">
      <div className="content">
        <div className="login-diver">
          <h1>Login</h1>

          {/* hight other function( funcao para outra funcao) */}
          <form onSubmit={handleSubmit(createUser)}>
            <label htmlFor="">Nome:</label>
            <input
              type="text"
              placeholder="digite sua senha"
              {...register('name')}
            />
            {errors.name && <span>{errors.name.message}</span>}

            <label htmlFor="">E-mail:</label>
            <input
              type="text"
              placeholder="digite seu email"
              {...register('email')}
            />
            {errors.email && <span>{errors.email.message}</span>}
            

            <label htmlFor="">Senha:</label>
            <input
              type="text"
              placeholder="sua senha"
              {...register('password')}
            />
            {errors.password && <span>{errors.password.message}</span>}

            <button type="submit">Enviar</button>

            <div className="login-footer">
              <p>ja possui uma conta? </p> <NavLink to='/login'>clique em login</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


// async function createUser(event: any) {
//   event.preventDefault();

//   await axios
//     .post("http://localhost:3333/cadastrar", data)
//     .then((response) => {
//       setMessage(response.data.message);
//     })
//     .catch((error) => setMessage(error.data.message));
// }