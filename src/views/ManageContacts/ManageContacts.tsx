import {useState} from 'react'
import ManageContactsForm from './ManageContactsForm'
import BaseLayout from '@src/components/layouts/BaseLayout'
import ContentSection from '@src/components/modules/ContentSection'
import ContactsSection from './ContactsSection'
import type {contactType} from '@src/types/contact'
import ContactModal from "./ContactModal"


const ManageContacts = () => {
    const [contacts, setContacts] = useState<contactType[]>([
        {firstName: "Daniel", lastName: "Stephany", email: "daniel@d.com"},
        {firstName: "Matt", lastName: "Stephany", email: "Matt.stephany@d.com"},
    ])
    const [activeContact, setActiveContact] = useState<contactType>();
    const [openModal, setOpenModal] = useState(false);

    const addContact = (contact: contactType) => {
        setContacts([...contacts, contact])
    }

    const handleCloseContactModal = () => {
        setOpenModal(false)
    }

    const handleOpenContactModal = (contact: contactType) => () => {
        setActiveContact(contact)
        setOpenModal(true)
    }

    return (
        <BaseLayout
            sidePanelChildren={
                <ContactsSection 
                    contacts={contacts}
                    handleOpenContactModal={handleOpenContactModal}
                />
            }
        >
            <ContentSection 
                title="Manage your contacts here."
            >
                <ManageContactsForm 
                    addContact={addContact}
                />
            </ContentSection>
            <ContactModal 
                open={openModal}
                handleClose={handleCloseContactModal}
                contact={activeContact}
            />
        </BaseLayout>
    )
}

export default ManageContacts