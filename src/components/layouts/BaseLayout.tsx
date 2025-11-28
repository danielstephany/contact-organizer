import styled from 'styled-components'

interface baseLayoutProps {
    className?: string,
    children: React.ReactNode
}

const BaseLayoutComp = ({
    className,
    children
}: baseLayoutProps) => {
    return (
        <div className={className}>
            <div className="base-layout__content">{children}</div>
        </div>
    )
}

const BaseLayout = styled(BaseLayoutComp)`
    display: flex;
    flex-direction: column;
    height: 100vh;
    height: 100dvh;
    .base-layout__content {
        display: flex;
        width: 600px;
        max-width: 100%;
        margin: auto auto;
    }
`

export default BaseLayout as typeof BaseLayoutComp