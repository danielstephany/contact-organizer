import {useState} from 'react'
import FormInput from '@src/components/controls/FormInput'
import Grid from '@src/components/elements/Grid'
import SectionActions from '@src/components/modules/SectionActions'
import Button from '@src/components/controls/Button'

const ManageContactsForm = () => {
    const [values, setValues] = useState({
        firstName: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setValues({ ...values, [name]: value})
    }

    return (
        <form>
            <Grid container spacingY={16} spacing={24}>
                <Grid size={6}>
                    <FormInput 
                        label="First Name"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid size={6}>
                    <FormInput
                        label="Last Name"
                        name="lastName"
                        value={values.firstName}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid size={12}>
                    <FormInput
                        label="Email"
                        name="email"
                        value={values.firstName}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <SectionActions
                paddingTop={32}
                rightActions={<Button>Submit</Button>}
            />
        </form>
    )
}

export default ManageContactsForm