import {useState} from 'react'
import ManageContactsForm from './ManageContactsForm'
import BaseLayout from '@src/components/layouts/BaseLayout'
import ContentSection from '@src/components/modules/ContentSection'
import ContactsSection from './ContactsSection'
import type {contactType} from '@src/types/contact'


const ManageContacts = () => {
    const [contacts, setContacts] = useState<contactType[]>([
        {firstName: "Daniel", lastName: "Stephany", email: "daniel@d.com"},
        {firstName: "Matt", lastName: "Stephany", email: "Matt.stephany@d.com"},
    ])

    return (
        <BaseLayout
            sidePanelChildren={
                <ContactsSection contacts={contacts}/>
            }
        >
            <ContentSection 
                title="Manage your contacts here."
            >
                <ManageContactsForm />
            </ContentSection>
        </BaseLayout>
    )
}

export default ManageContacts