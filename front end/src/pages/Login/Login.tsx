import { useState } from "react"
import './login.css'

export default function Login() {

    //  quero receber um objeto para passar apra dentro do data
    const [ data, setData ] = useState({
        name: '',
        email: '',
    })
 
    // CREATE users quando usuario der submit
    function createUser(event: any) {
        event.preventDefault()
        console.log(`Nome:  ${data.name} - Email:  ${data.email}`)
    }

    //  Receber os dados dos campos do formulario
    function valorInput(event: any) {
        
        setData({...data, [event.target.name]: event.target.value})
    }

    return (
        <div className='container'>
            <div className="content">
                <div className="login-diver">
                <h1>Login</h1>

                <form onSubmit={createUser} >
                    <label htmlFor="">Nome:</label>
                    <input type="text" name="name" onChange={valorInput} placeholder="seu nome" required />

                    <label htmlFor="">Senha:</label>
                    <input type="text" name="email" onChange={valorInput} placeholder="sua senha" required />

                    <button>Enviar</button>
                </form>
                </div>
            </div>
        </div>
    )
  }