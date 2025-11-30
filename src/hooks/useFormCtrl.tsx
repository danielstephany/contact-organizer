import {useState} from 'react'
type tErrors = { [key: string]: boolean | string }
type tValidate<v extends object> = (values: v) => { [key: string]: boolean | string }

interface useFormCtrlProps<v extends object> {
    initialValues: v,
    valiadate?: tValidate<v>
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

const useFormCtrl = <v extends object,>({ 
    initialValues,
    valiadate=defaultValidate,
}: useFormCtrlProps<v>) => {
    const [values, setValues] = useState<useFormCtrlProps<v>["initialValues"]>(initialValues)
    const [errors, setErrors] = useState<tErrors>({})


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target
        setValues({ ...values, [target.name]: target.value})
    }

    const validate = () => {
        const formErrors = valiadate(values)
        console.log(formErrors)
        setErrors(formErrors)
        return Object.values(formErrors).filter(value => value).length === 0;
    }

    return {
        handleChange,
        validate,
        values,
        errors
    }
}

export default useFormCtrl