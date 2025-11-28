import {useState} from 'react'
import ManageContactsForm from './ManageContactsForm'
import BaseLayout from '@src/components/layouts/BaseLayout'
import ContentSection from '@src/components/modules/ContentSection'

const ManageContacts = () => {
    const [contacts, setContacts] = useState();
    return (
        <BaseLayout>
            <ContentSection 
                title="Manage your contacts here."
            >
                <ManageContactsForm />
            </ContentSection>
        </BaseLayout>
    )
}

export default ManageContacts