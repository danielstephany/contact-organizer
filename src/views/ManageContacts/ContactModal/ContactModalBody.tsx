import styled from 'styled-components'
import SectionActions from '@src/components/modules/SectionActions'
import Button from '@src/components/controls/Button'
import Grid from '@src/components/elements/Grid'
import Text from '@src/components/modules/Text'
import type { contactType } from "@src/types/contact"
import DataDisplay from '@src/components/modules/DataDisplay'

interface contactModalBodyProps {
    contact?: contactType,
    handleClose: () => void,
    className?: string
}

const ContactModalBodyComp = ({
    contact,
    className,
    handleClose,
}: contactModalBodyProps) => {
    return (
        <div className={className}>
            <div className="contact-modal-body__content">
                <Grid container spacing={16}>
                    <Grid size={12}>
                        <Text variant='title-2' align={"center"}>Contact Details</Text>
                    </Grid>
                </Grid>
                <Grid container spacing={16} as="dl">
                    <Grid size={6}>
                        <DataDisplay 
                            label="First Name"
                            data={contact?.firstName}
                        />
                    </Grid>
                    <Grid size={6}>
                        <DataDisplay
                            label="Last Name"
                            data={contact?.lastName}
                        />
                    </Grid>
                    <Grid size={6}>
                        <DataDisplay
                            label="Email"
                            data={contact?.email}
                        />
                    </Grid>
                </Grid>
            </div>
            <SectionActions 
                padding={24}
                border
                rightActions={<Button onClick={handleClose}>Close</Button>}
            />
        </div>
    )
}

const ContactModalBody = styled(ContactModalBodyComp)`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    .contact-modal-body__content {
        padding: 24px;
    }
` as typeof ContactModalBodyComp

export default ContactModalBody