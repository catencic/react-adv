import { Form, Formik } from 'formik';
import { MySelect } from '../components/MySelect';
import { MyTextInput } from '../components/MyTextInput';
import formJson from '../data/custom-form.json'
import * as Yup from 'yup';

const initialValues: {[key: string]: any} = {};
const requiredFields: {[key: string]: any} = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if(!input.validations) continue;

    let schema = Yup.string()

    for (const rule of input.validations) {
        if(rule.type === 'required'){
            schema = schema.required('Este campo es requerido')
        }
    }

    for (const rule of input.validations) {
        if(rule.type === 'minLength'){
            schema = schema.min((rule.value as any) || 2, `Debe de tener ${rule.value || 2} caracteres o mas`)
        }
    }

    for (const rule of input.validations) {
        if(rule.type === 'email'){
            schema = schema.email('Email no valido')
        }
    }

    requiredFields[input.name] = schema;
}


const validationSchema = Yup.object({...requiredFields});

export const DynamicFormPage = () => {

    

  return (
    <div>
        <h1>Dynamic Form Page</h1>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values=>{
            console.log(values);
        }}
        >
            {
                (formik =>(
                    <Form noValidate>
                        {
                            formJson.map(field=>{

                                if(field.type === 'input' || field.type === 'password' || field.type === 'email'){

                                    return <MyTextInput
                                    key={field.name} 
                                    label={field.label}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    type={(field.type as any)}
                                    
                                    />
                                }else if(field.type === 'select'){
                                    return <MySelect key={field.name} name={field.name}label={field.label}>
                                        <option value="">Seleccione...</option>
                                        {
                                            field.options?.map(option=>(
                                                <option key={option.id} value={option.id}>{option.label}</option>
                                            ))
                                        }

                                        </MySelect>
                                }

                                throw new Error(`El type ${field.type}, no es soportado`)


                            })
                        }

                        <button type="submit">Submit</button>

                    </Form>
                ))
            }
        </Formik>
    </div>
  )
}
