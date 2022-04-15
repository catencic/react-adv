
import { useForm } from '../hooks/useForm';
import '../styles/styles.css'

export const RegisterPage = () => {

 

    const {formData , onChange , resetForm , isValidEmail} = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData;

 


    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, email, password, password2);
    }

  return (
    <div>
        <h1>RegisterPage</h1>

        <form noValidate 
        onSubmit={ handleSubmit}>
            <input 
            type="text"
            placeholder="Name"
            name="name"
            onChange={onChange}
            value={name}
            className={` ${name.trim().length <= 0 && 'has-error'} `}
            />
            {name.trim().length <= 0 && <span>Este campo es necesario</span>}

            <input 
            type="email"
            placeholder="Email"
            name="email"
            onChange={onChange}
            value={email}
            className={` ${ !isValidEmail(email)  && 'has-error'} `}
            />
            {!isValidEmail(email) && <span>Email no valido</span>}

            <input 
            type="password"
            placeholder="Password"
            name="password"
            onChange={onChange}
            value={password}
            className={` ${password.trim().length <= 0 && 'has-error'} `}
            />
             {password.trim().length <= 0 && <span>Este campo es necesario</span>}
             {password.trim().length < 6 && password.trim().length > 0 && <span>La contraseña debe tener mas de 6 caracteres</span>}

            <input 
            type="password"
            placeholder="Repeat Password"
            name="password2"
            onChange={onChange}
            value={password2}
            className={` ${password2.trim().length <= 0 && 'has-error'} `}
            />
             {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
             {password2.trim().length > 0 && password !== password2 && <span>Las contraseñas deben ser iguales</span>}

            <button type="submit" >Create</button>
            <button type="button" onClick={resetForm}>Reset</button>

        </form>
    </div>
  )
}
