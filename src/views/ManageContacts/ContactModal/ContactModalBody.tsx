import styled from 'styled-components'
import SectionActions from '@src/components/modules/SectionActions'
import Button from '@src/components/controls/Button'
import Grid from '@src/components/elements/Grid'
import Text from '@src/components/modules/Text'

interface contactModalBodyProps {
    handleClose: () => void,
    className?: string
}

const ContactModalBodyComp = ({
    className,
    handleClose,
}: contactModalBodyProps) => {
    return (
        <div className={className}>
            <Grid container spacing={16}>
                <Text variant='title-2'>Contact Details</Text>
            </Grid>
            <SectionActions 
                rightActions={<Button onClick={handleClose}>Close</Button>}
            />
        </div>
    )
}

const ContactModalBody = styled(ContactModalBodyComp)`
    display: flex;
` as typeof ContactModalBodyComp

export default ContactModalBody