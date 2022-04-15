
import {  Formik  ,Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';

import '../styles/styles.css'
import { MySelect } from '../components/MySelect';
import { MyCheckbox } from '../components/MyCheckbox';




export const FormikAbstraction = () => {

    

    

  return (
    <div>

        <h1>Formik Abstraction</h1>

        <Formik 
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            terms: false,
            jobType: '',
        }}
        onSubmit= { values =>{
            console.log(values);
        }}
        validationSchema={
            Yup.object({
                firstName: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                lastName: Yup.string()
                                .max(10, 'Debe de tener 10 caracteres o menos')
                                .required('Requerido'),   
                email: Yup.string()
                            .email('Email no valido')
                            .required('Requerido'),
                terms: Yup.boolean()
                      .oneOf([true], 'Debe aceptar las condiciones'),
                      
                jobType: Yup.string()
                            .notOneOf(['it-jr'], 'Esta opción no es permitida')
                            .required('Requerido')      
            })
        }>

            {
                formik => (
                    <Form>

                    <MyTextInput 
                    label="first Name" 
                    name="firstName"
                    placeholder="Cristian"
                    
                    />    

                    <MyTextInput 
                    label="last Name" 
                    name="lastName"
                    placeholder="Atencia"
                    
                    />    

                    <MyTextInput 
                    label="Email" 
                    name="email"
                    placeholder="Cristian@google.com"
                    type="email"
                    />  
        
        
                   
                    <MySelect label="Job Type" name="jobType">
                        <option value="">Pick something</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-senior">TI Senior</option>
                        <option value="it-jr">TI Junior</option>
                    </MySelect>
              
                    
                    <MyCheckbox label="Termns & Conditions" name="terms" />
        
                    <button type="submit" >Submit</button>
                </Form>
                )
            }
            
        </Formik>


    </div>
  )
}
