import React from "react"
import styled from 'styled-components'
import { lighten } from 'polished'

interface ButtonProps extends React.ComponentProps<'button'> {}

const ButtonComp = ({ children, ...others }: ButtonProps) => {

    return <button {...others}>{children}</button>
}

const Button = styled(ButtonComp)`
    border: none;
    color: #fff;
    background: #002626;
    padding: 4px 16px;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    &:hover {
        background-color: ${lighten(0.1, "#002626")}
    }
`

export default Button