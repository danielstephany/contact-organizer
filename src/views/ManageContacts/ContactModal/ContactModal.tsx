import Modal from "@src/components/modules/Modal"
import ContactModalBody from './ContactModalBody'
import type { contactType } from "@src/types/contact"

interface contactModalProps {
    open: boolean
    contact?: contactType,
    handleClose: () => void
}

const ContactModal = ({ 
    open, 
    handleClose,
    contact
}: contactModalProps) => {
    return (
        <Modal open={open}>
            <ContactModalBody
                contact={contact}
                handleClose={handleClose}
            />
        </Modal>
    )
}

export default ContactModal