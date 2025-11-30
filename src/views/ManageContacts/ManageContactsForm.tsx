import {useState} from 'react'
import FormInput from '@src/components/controls/FormInput'
import Grid from '@src/components/elements/Grid'
import SectionActions from '@src/components/modules/SectionActions'
import Button from '@src/components/controls/Button'
import useFormCtrl from '@src/hooks/useFormCtrl'

const ManageContactsForm = () => {
    const [values, setValues] = useState({
        firstName: ""
    })

    const formCtrl = useFormCtrl({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        }
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        formCtrl.validate();
    }

    return (
        <form noValidate onSubmit={handleSubmit}>
            <Grid container spacingY={16} spacing={24}>
                <Grid size={6}>
                    <FormInput 
                        label="First Name"
                        name="firstName"
                        value={formCtrl.values.firstName}
                        onChange={formCtrl.handleChange}
                        error={formCtrl.errors.firstName}
                        fullWidth
                    />
                </Grid>
                <Grid size={6}>
                    <FormInput
                        label="Last Name"
                        name="lastName"
                        value={formCtrl.values.lastName}
                        onChange={formCtrl.handleChange}
                        error={formCtrl.errors.lastName}
                        fullWidth
                    />
                </Grid>
                <Grid size={12}>
                    <FormInput
                        label="Email"
                        name="email"
                        value={formCtrl.values.email}
                        onChange={formCtrl.handleChange}
                        error={formCtrl.errors.email}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <SectionActions
                paddingTop={32}
                rightActions={<Button type="submit">Submit</Button>}
            />
        </form>
    )
}

export default ManageContactsForm