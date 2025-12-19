import type React from 'react'
import styled from 'styled-components'

interface sectionActionsProps {
    className?: string
    leftActions?: React.ReactElement,
    rightActions?: React.ReactElement,
    paddingX?: number,
    paddingY?: number,
    paddingTop?: number,
    paddingBottom?: number,
    padding?: number
    border?: boolean
}

const SectionActionsComp = ({ 
    className,
    leftActions,
    rightActions,
}: sectionActionsProps) => {
    return (
        <div className={className}>
            {leftActions && <div className='section-actions__left'>{leftActions}</div>}
            {rightActions && <div className='section-actions__right'>{rightActions}</div>}
        </div>
    )
}

const SectionActions = styled(SectionActionsComp).attrs<sectionActionsProps>(({
    padding
}) => ({
    padding: padding || 0
}))`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: ${({ border, theme }) => border ? `1px solid ${theme.colors.borderDefault}` : "none"};
    padding: ${({ paddingY, padding }) => ((paddingY || padding ) + "px")} ${({ paddingX, padding }) => ((paddingX || padding ) + "px") };
    ${({ paddingTop }) => paddingTop ? `padding-top: ${paddingTop}px;` : ""}
    ${({ paddingBottom }) => paddingBottom ? `padding-bottom: ${paddingBottom}px;` : ""}
    .section-actions__right {
        margin-left: auto;
    }
`

export default SectionActions;