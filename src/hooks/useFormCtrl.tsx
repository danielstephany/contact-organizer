import {useState} from 'react';

interface useFormCtrlProps<v> {
    initialValues: v
}

const useFormCtrl = <v={},>({ 
    initialValues
}: useFormCtrlProps<v>) => {
    const [values, setValues] = useState<useFormCtrlProps<v>["initialValues"]>(initialValues)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        debugger
        setValues({ ...values, [target.name]: target.value})
    }

    return {
        handleChange,
        values
    }
}

export default useFormCtrl