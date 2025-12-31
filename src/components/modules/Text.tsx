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

const setMargins = (mt?: boolean, mb?: boolean) => {
    return `
        ${mt ? "margin-top: 1em;" : ""}
        ${mb ? "margin-bottom: 1em;" : ""}
    `
}

const variantStyles: (mt?: boolean, mb?: boolean) => Record<Variant, ReturnType<typeof css>> = (mt?: boolean, mb?: boolean) => ({
    display: css`
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.2;
        ${setMargins(mt, mb)}
    `,
    title: css`
        font-size: 1.75rem;
        font-weight: 600;
        ${setMargins(mt, mb)}
    `,
    "title-2": css`
        font-size: 1.25rem;
        font-weight: 500;
        ${setMargins(mt, mb)}
    `,
    "title-3": css`
        font-size: 1.125rem;
        color: #666;
        ${setMargins(mt, mb)}
    `,
    body: css`
        font-size: 1rem;
        ${setMargins(mt, mb)}
    `,
    caption: css`
        font-size: 0.85rem;
        color: #888;
        ${setMargins(mt, mb)}
    `,
});

interface TextProps extends React.HTMLAttributes<HTMLElement> {
    as?: TextTag;
    variant?: Variant;
    align?: "left" | "right" | "center",
    children: React.ReactNode;
    mt?: boolean,
    mb?: boolean
}

/* ----------------------------------------- */
/* Component */
/* ----------------------------------------- */

const StyledText = styled.p.attrs<{ variant: Variant, align?: TextProps["align"], mt?: boolean, mb?: boolean }>(() => ({}))
.withConfig({
    shouldForwardProp: (prop) => !['as', 'variant', 'align', 'childern', 'mb', "mt"].includes(prop),
})`
    margin: 0;
    ${({ variant, mt, mb }) => variantStyles(mt, mb)[variant]}
    ${({align}) => align ? `text-align: ${align};` : ""}
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