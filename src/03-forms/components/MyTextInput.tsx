import { ErrorMessage, useField } from "formik"

interface Props{
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any                        ////Comodin para agregar cualquier cantidad de parametros adicionales
}

export const MyTextInput = ({label, ...props}: Props) => {

    const [field, meta] = useField(props)


  return (
    <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props}/>
        <ErrorMessage name={props.name} component="span"/>
        {/* {
            meta.touched && meta.error && (
                <span> {meta.error} </span>
            )
        }    */}
    </>
  )
}
