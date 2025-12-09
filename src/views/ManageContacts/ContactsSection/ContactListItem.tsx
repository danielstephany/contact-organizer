import styled from 'styled-components'

interface contactProps {
    firstName: string,
    lastName: string,
    email: string,
    className?: string
}

const ContactItemComp = ({ 
    firstName,
    lastName,
    email,
    className
}: contactProps) => {
    return (
        <li className={className}>
            <span>{firstName}</span>
            <span>{lastName}</span>
            <span>{email}</span>
        </li>
    )
}

const ContactItem = styled(ContactItemComp)`
    display: flex;
    
`

export default ContactItem