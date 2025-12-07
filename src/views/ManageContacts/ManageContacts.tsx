import {useState} from 'react'
import ManageContactsForm from './ManageContactsForm'
import BaseLayout from '@src/components/layouts/BaseLayout'
import ContentSection from '@src/components/modules/ContentSection'
import ContactsList from './ContactsList'

const ManageContacts = () => {
    const [contacts, setContacts] = useState([{}])

    return (
        <BaseLayout
            sidePanelChildren={
                <ContactsList contacts={contacts}/>
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