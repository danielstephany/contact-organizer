import type { ReactNode } from 'react'
import styled from 'styled-components'
import Text from "@src/components/modules/Text"

const ContentSectionBase = styled.div`
    display: flex;
    align-items: stretch;
    flex-direction: column;
    border: solid 2px #ccc;
    border-radius: 6px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2);
`

const ContentSectionHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px; 16px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.borderDefault};
`

const ContentSectionBody = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 24px; 16px;
`

interface contentSectionProps {
    children: ReactNode,
    title: string
}

const ContentSection = ({ children, title }: contentSectionProps) => {
    return (
        <ContentSectionBase>
            <ContentSectionHeader>
                <Text as="h2" variant='title-2'>{title}</Text>
            </ContentSectionHeader>
            <ContentSectionBody>
                {children}
            </ContentSectionBody>
        </ContentSectionBase>
    )
}

export default ContentSection