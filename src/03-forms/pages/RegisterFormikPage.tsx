
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

import '../styles/styles.css'
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {

 /**
  * 
  *   name: '',
        email: '',
        password: '',
        password2: ''
  */

    

  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
        initialValues={{
        name: '',
        email: '',
        password: '',
        password2: ''
        }}
        onSubmit={ values => {
            console.log(values);
        }}
        validationSchema={
            Yup.object({
                name: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .min(2, 'Debe de tener 2 caracteres o mas')
                        .required('Requerido'),
                email: Yup.string()
                        .email('Email no valido')
                        .required('Requerido'),
                password: Yup.string()
                        .min(6 , 'Debe de tener 6 caracteres o mas')
                        .required('Requerido'),
                password2: Yup.string()  
                        .oneOf([Yup.ref('password') , null], 'Las contraseñas deben ser iguales')
                        .required('Requerido'),
            })
        }
        >
            {
                ({handleReset})=>(

           
            <Form>
            
                    <MyTextInput
                    label="Name" 
                    name="name"
                    placeholder="Cristian"
                    />  

                    <MyTextInput
                    label="Email" 
                    name="email"
                    placeholder="Cristian@yopmail.com"
                    type="email"
                    /> 

                    <MyTextInput
                    label="Password" 
                    name="password"
                    type="password"
                    /> 

                    <MyTextInput
                    label="Confirm Password" 
                    name="password2"
                    type="password"
                    /> 


                <button type="submit" >Create</button>
                <button type="submit" onClick={handleReset}>Reset form</button>
                

            </Form>
                 )
                }

        </Formik>

        
    </div>
  )
}
