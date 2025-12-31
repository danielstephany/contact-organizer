import styled from 'styled-components'
import { lighten } from 'polished'
import type { contactType } from '@src/types/contact'

interface contactProps extends contactType {
    className?: string,
    onClick: () => any
}

interface buttonPropsType {
    onClick?: ()=> any
} 

const ContactItemComp = ({ 
    firstName,
    lastName,
    className,
    onClick,
    ...others
}: contactProps) => {
    const buttonProps: buttonPropsType = {};
    if(onClick) buttonProps.onClick = onClick;

    return (
        <li className={className} {...others}>
            <button tabIndex={0} {...buttonProps} >{firstName + " " + lastName}</button>
        </li>
    )
}

const ContactItem = styled(ContactItemComp)`
    display: flex;
    margin-left: -4px;
    width: calc(100% + 4px);
    border-bottom: 1px solid ${({ theme }) => lighten(0.05, theme.colors.borderDefault)};
    padding: 4px 0;
    button {
        border-radius: 4px;
        display: inline-flex;
        border: none;
        outline: none;
        background-color: transparent;
        padding: 8px 4px;
        width: 100%;
        cursor: pointer;
        &:focus,
        &:hover {
            color: #fff;
            background-color: ${({ theme }) => lighten(0.2, theme.colors.primary)};
        }
    }
`

export default ContactItem