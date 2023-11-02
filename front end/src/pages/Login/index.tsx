import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";


// regras de validacao
const createUserFormSchema = z.object({
  email: z.string()
    .nonempty('O e-mail é obrigatorio')
    .email('Formato de email invalido')
    .toLowerCase(),
  password: z.string()
    .min(8, 'Senha precisa no minimo 8 caracteres'),
})

type createUserFormData = z.infer<typeof createUserFormSchema>

export default function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  async function handleLogin({email, password}: createUserFormData) {
    if(email && password) {
      const isLogged = await  auth.signin(email, password);
      if(isLogged) {
          navigate('/');
      } else {
        alert('Email ou senha invalidos, por favor tente algo valido');
      }
    }
  }

  return (
    <div className="container">
      <div className="content">
        <div className="login-diver">
          <h1>Login</h1>

          <form onSubmit={handleSubmit(handleLogin)}>
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
              <p>Nao possui uma conta? </p> <NavLink to='/register'>criar conta</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}