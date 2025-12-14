import {useState} from 'react'
import ManageContactsForm from './ManageContactsForm'
import BaseLayout from '@src/components/layouts/BaseLayout'
import ContentSection from '@src/components/modules/ContentSection'
import ContactsSection from './ContactsSection'
import type {contactType} from '@src/types/contact'
import Modal from "@src/components/modules/Modal"


const ManageContacts = () => {
    const [contacts, setContacts] = useState<contactType[]>([
        {firstName: "Daniel", lastName: "Stephany", email: "daniel@d.com"},
        {firstName: "Matt", lastName: "Stephany", email: "Matt.stephany@d.com"},
    ])
    const [openModal, setOpenModal] = useState(false);

    const addContact = (contact: contactType) => {
        setContacts([...contacts, contact])
    }


    return (
        <BaseLayout
            sidePanelChildren={
                <ContactsSection contacts={contacts}/>
            }
        >
            <ContentSection 
                title="Manage your contacts here."
            >
                <ManageContactsForm 
                    addContact={addContact}
                />
            </ContentSection>
            <button onClick={() => {setOpenModal(!openModal)}}>toggle modal</button>
            <Modal open={openModal}><button onClick={() => { setOpenModal(!openModal) }} >close</button></Modal>
        </BaseLayout>
    )
}

export default ManageContacts