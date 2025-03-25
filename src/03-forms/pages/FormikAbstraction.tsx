import {Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import { MyTextInput, MyCheckBox, MySelect } from '../components'

export const FormikAbstraction = () => {

  return (
    <div>
        <h1>FormikAbstraction</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType:''
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Debe tener 15 caracteres o menos')
                    .required('Requerido'),
                lastName: Yup.string()
                    .max(20, 'Debe tener 15 caracteres o menos')
                    .required('Requerido'),
                email: Yup.string()
                    .email('El formato del email no es válido')
                    .required('Requerido'),
                terms: Yup.boolean()
                    .isTrue('Debe aceptar los términos y condiciones'),
                jobType: Yup.string()
                    .notOneOf(['it-junior'],'Esta opción no es válida')
                    .required('Debe seleccionar un tipo de empleo')
            })}
        >   

        {
            (formik) => (
                <Form>
                    <MyTextInput label='First Name' name='firstName' placeholder='Ingrese su nombre' />

                    <MyTextInput label='Last Name' name='lastName' placeholder='Ingrese su apellido' />

                    <MyTextInput label='Email' name='email' placeholder='Ingrese su email' />

                    <MySelect label='Job Type' name='jobType'>
                        <option value=''>Elija su tipo de empleo</option>
                        <option value='developer'>Developer</option>
                        <option value='designer'>Designer</option>
                        <option value='it-senior'>IT Senior</option>
                        <option value='it-junior'>IT Junior</option>
                    </MySelect>


                    <MyCheckBox label='Terms & Conditions' name='terms'/>

                    <button type='submit'>Submit</button>

                </Form>

            )
        }

        </Formik>
    </div>
  )
}
