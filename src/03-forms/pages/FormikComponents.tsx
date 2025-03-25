import {Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikComponents = () => {

  return (
    <div>
        <h1>FormikComponents</h1>

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
                    <label htmlFor="firstName">First Name</label>
                    <Field name='firstName' type='text'/>
                    <ErrorMessage name='firstName' component='span'/>

                    <label htmlFor='lastName'>Last Name</label>
                    <Field name='lastName' type='text'/>
                    <ErrorMessage name='lastName' component='span'/>

                    <label htmlFor='email'>Email</label>
                    <Field name='email' type='email'/>
                    <ErrorMessage name='email' component='span'/>

                    <label>Job Type</label>
                    <Field name='jobType' as='select'>
                        <option value=''>Elija su tipo de empleo</option>
                        <option value='developer'>Developer</option>
                        <option value='designer'>Designer</option>
                        <option value='it-senior'>IT Senior</option>
                        <option value='it-junior'>IT Junior</option>
                    </Field>
                    <ErrorMessage name='jobType' component='span'/>

                    <label>
                        <Field name='terms' type='checkbox'/>
                        Terms & Conditions
                    </label>
                    <ErrorMessage name='terms' component='span'/>

                    <button type='submit'>Submit</button>

                </Form>

            )
        }

        </Formik>
    </div>
  )
}
