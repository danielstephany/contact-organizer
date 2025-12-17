import Modal from "@src/components/modules/Modal"
import ContactModalBody from './ContactModalBody'

interface contactModalProps {
    open: boolean
    handleClose: () => void
}

const ContactModal = ({ 
    open, 
    handleClose 
}: contactModalProps) => {
    return (
        <Modal open={open}>
            <ContactModalBody
                handleClose={handleClose}
            />
        </Modal>
    )
}

export default ContactModal