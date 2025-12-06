import styled from 'styled-components'

interface baseLayoutProps {
    className?: string,
    children: React.ReactNode,
    sidePanelChildren: React.ReactNode
}

const BaseLayoutComp = ({
    className,
    children,
    sidePanelChildren
}: baseLayoutProps) => {
    return (
        <div className={className}>
            <div className="base-layout__content">{children}</div>
            <div className='base-layout__sidebar-right'>
                {sidePanelChildren}
            </div>
        </div>
    )
}

const BaseLayout = styled(BaseLayoutComp)`
    display: flex;
    align-items: stretch;
    height: 100vh;
    height: 100dvh;
    .base-layout__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        max-width: 100%;
        height: 100%;
        padding: 24px;
    }
    .base-layout__sidebar-right {
        display: flex;
        flex-direction: column;
        width: 400px;
        background: #fff;
        box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2);
    }
`

export default BaseLayout as typeof BaseLayoutComp