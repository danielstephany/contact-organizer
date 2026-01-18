import React from "react"
import styled from 'styled-components'

interface ButtonProps extends React.ComponentProps<'button'> {
    variant?: "outline" | "solid",
    color?: "primary" | "secondary"
}

const defaultColor = "primary"

const ButtonComp = ({ children, variant="solid", color=defaultColor, ...others }: ButtonProps) => {

    return <button {...others}>{children}</button>
}

const Button = styled(ButtonComp).attrs<ButtonProps>(({
    color,
    variant
}) => ({
    variant: variant || "solid",
    color: color || defaultColor
}))` 
    color: ${({ variant, theme, color = defaultColor }) => variant === "outline" ? theme.colors[color].main : "#fff"};
    ${({ variant, theme, color = defaultColor }) => variant === "outline" ? `border: solid 2px ${theme.colors[color].main};` : "border: none;"}
    background: ${({ variant }) => variant === "solid" ? "#002626" : "transparent"};
    padding: 4px 16px;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    &:hover {
        ${({ variant, theme, color=defaultColor }) => variant === "solid" ? `background-color: ${theme.colors[color].lite};` : ""}
        ${({ variant, theme, color=defaultColor }) => variant === "outline" ? `color: ${theme.colors[color].lite};` : "color: #fff;"}
        ${({ variant, theme, color = defaultColor }) => variant === "outline" ? `border-color: ${theme.colors[color].lite};` : ""}
    }
`

export default Button