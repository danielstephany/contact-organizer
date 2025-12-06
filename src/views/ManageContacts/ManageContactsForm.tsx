import FormInput from '@src/components/controls/FormInput'
import Grid from '@src/components/elements/Grid'
import SectionActions from '@src/components/modules/SectionActions'
import Button from '@src/components/controls/Button'
import useFormCtrl from '@src/hooks/useFormCtrl'
import type { tErrors, tValues } from "@src/hooks/useFormCtrl"
import { EMAIL_REGEX } from "@src/constants/index"

const validate = (values: tValues) => {
    const errors: tErrors = {};

    Object.entries(values).forEach(([key, value]) => {
        if (key === "email" && value && !EMAIL_REGEX.test(value)){
            errors[key] = "Please enter a valid email"
        } else if (!value) {
            errors[key] = true
        }
    })

    return errors
}

const ManageContactsForm = () => {

    const formCtrl = useFormCtrl({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        validate
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