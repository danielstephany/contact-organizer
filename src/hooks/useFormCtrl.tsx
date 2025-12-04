import {useState} from 'react'
export type tErrors = { [key: string]: boolean | string }
export type tValues = { [key: string]: any }
export type tValidate<v extends object> = (values: v) => { [key: string]: boolean | string }

interface useFormCtrlProps<v extends object> {
    initialValues: v,
    validate?: tValidate<v>
}

const defaultValidate = <v extends object,>(values: v) => {
    const errors: tErrors = {};

    Object.entries(values).forEach(([key, value]) => {
        if(!value){
            errors[key] = true
        }
    })

    return errors
}

const focusError = () => {
    const errorInput: HTMLInputElement | null = document.querySelector(".form-input_error")
    if(errorInput) errorInput.focus()
}

const useFormCtrl = <v extends object,>({ 
    initialValues,
    validate=defaultValidate,
}: useFormCtrlProps<v>) => {
    const [values, setValues] = useState<useFormCtrlProps<v>["initialValues"]>(initialValues)
    const [errors, setErrors] = useState<tErrors>({})


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target
        setValues({ ...values, [target.name]: target.value})
    }

    const validateValues = () => {
        const formErrors = validate(values)
        setErrors(formErrors)
        setTimeout(() => {
            focusError();
        }, 0)
        
        return Object.values(formErrors).filter(value => value).length === 0;
    }

    return {
        handleChange,
        validate: validateValues,
        values,
        errors
    }
}

export type useFormCtrlReturnType = ReturnType<typeof useFormCtrl>;

export default useFormCtrl