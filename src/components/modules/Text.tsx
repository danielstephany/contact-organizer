import React from "react";
import styled, { css } from "styled-components";

type TextTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type Variant =
    | "display"
    | "title"
    | "title-2"
    | "title-3"
    | "body"
    | "caption";

/* ----------------------------------------- */
/* Variant Styles */
/* ----------------------------------------- */

const variantStyles: Record<Variant, ReturnType<typeof css>> = {
    display: css`
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.2;
    `,
    title: css`
        font-size: 1.75rem;
        font-weight: 600;
    `,
    "title-2": css`
        font-size: 1.25rem;
        font-weight: 500;
    `,
    "title-3": css`
        font-size: 1.125rem;
        color: #666;
    `,
    body: css`
        font-size: 1rem;
    `,
    caption: css`
        font-size: 0.85rem;
        color: #888;
    `,
};

interface TextProps extends React.HTMLAttributes<HTMLElement> {
    as?: TextTag;
    variant?: Variant;
    children: React.ReactNode;
}

/* ----------------------------------------- */
/* Component */
/* ----------------------------------------- */

const StyledText = styled.p<{ variant: Variant }>`
    margin: 0;
    ${({ variant }) => variantStyles[variant]}
`;

const Text: React.FC<TextProps> = ({
    as = "p",
    variant = "body",
    children,
    ...props
}) => {
    return (
        <StyledText as={as} variant={variant} {...props}>
            {children}
        </StyledText>
    );
};

export default Text