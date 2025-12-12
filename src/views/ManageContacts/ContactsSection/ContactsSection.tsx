import styled from "styled-components"
import ContactListItem from './ContactListItem'
import type { contactType } from '@src/types/contact'

interface contactsListProps {
    contacts: contactType[],
    className?: string
}

const ContactsSectionComp = ({
    className, 
    contacts
 }: contactsListProps) => {
    return (
        <div className={className}>
            <div className="contact-section__header">
                <h3>Contacts</h3>
            </div>
            <ol className="contact-section__list">
                {
                    contacts ?
                        contacts.map(contact => (
                            <ContactListItem
                                key={contact.email}
                                firstName={contact.firstName}
                                lastName={contact.lastName}
                                id={contact.email}
                            />
                        ))
                    : null
                }
            </ol>
        </div>
    )
}

const ContactsSection = styled(ContactsSectionComp)`
    display: flex;
    flex-direction: column;
    .contact-section__header {
        padding: 24px;
        position: relative;
        &::after {
            display: inline-block;
            content: "";
            width: calc(100% - 46px);
            border-bottom: 1px solid ${({theme}) => theme.colors.borderDefault};
            position: absolute;
            bottom: 0;

        }
    }
    .contact-section__list {
        list-style: none;
        padding: 24px;
        margin: 0;
        overflow: auto;
    }
    h3 {
        margin: 0;
        font-size: 24px;
    }
` as typeof ContactsSectionComp

export default ContactsSection