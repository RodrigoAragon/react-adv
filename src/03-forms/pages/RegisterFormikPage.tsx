import '../styles/styles.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

   
        

  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit = {(values) => {
                console.log(values)
            }}
            validationSchema= {Yup.object({
                name: Yup.string()
                        .min(2, 'Debe tener al menos 2 caracteres')
                        .max(15, 'Debe tener menos de 15 caracterers')
                        .required('El campo es obligatorio'),
                email: Yup.string()
                        .min(6,'El campo debe tener al menos 6 caracteres')
                        .email('Debe ser un email válido')
                        .required('El campo es obligatorio'),
                password1: Yup.string()
                        .min(6, 'Debe tener al menos 6 caracteres')
                        .required('El campo es obligatorio'),
                password2: Yup.string()
                        .min(6,'Debe tener al menos 6 caracteres')
                        .required('El campo es obligatorio')
                        .oneOf([Yup.ref('password1')], 'Las contraseñas deben ser iguales')
            })}
        >
            <Form>
                <MyTextInput label='Name' name='name' type='text' placeholder='Name'/>

                <MyTextInput label='Email' name='email' type='email' placeholder='Email'/>

                <MyTextInput label='Password' name='password1' type='password' placeholder='Password'/>

                <MyTextInput label='Repeat Password' name='password2' type='password' placeholder='Repeat Password'/>
                
                <button type="submit">Create user</button>
                <button type='reset'>Reset</button>
            </Form>


        </Formik>
        

        {/* <form noValidate onSubmit={handleSubmit}>

            <input              ///min 2 max 15 requerido
                type="text"
                placeholder='Name'
                {...getFieldProps('name')}
            />
            {touched.name && errors.name && <span>{errors.name}</span>}

            <input              ///min 6 email requerido
                type="email"
                placeholder='Email'
                {...getFieldProps('email')}
            />
            {touched.email && errors.email && <span>{errors.email}</span>}

            <input              /// Que el password y el repeat password tengan el mismo valor
                type="password"
                placeholder='Password'
                {...getFieldProps('password1')}
            />
            {touched.password1 && errors.password1 && <span>{errors.password1}</span>}

            <input 
                type="password"
                placeholder='Repeat Password'
                {...getFieldProps('password2')}
            />
            {touched.password2 && errors.password2 && <span>{errors.password2}</span>}

            <button type="submit">Create user</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </form> */}
    </div>
  )
}