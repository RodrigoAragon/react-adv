import { ErrorMessage, useField } from "formik"

interface Props{
    label: string;
    name: string;
    [x: string]: any                        ////Comodin para agregar cualquier cantidad de parametros adicionales
}

export const MyCheckBox = ({label, ...props}: Props) => {

    const [field, meta] = useField({...props, type:'checkbox'})


  return (
    <>
        <label htmlFor={props.id || props.name}>
            <input type="checkbox" {...field} {...props} />
            {label}
        </label>
        <ErrorMessage name={props.name} component="span" />
        {/* {
            meta.touched && meta.error && (
                <span> {meta.error} </span>
            )
        }    */}
    </>
  )
}
