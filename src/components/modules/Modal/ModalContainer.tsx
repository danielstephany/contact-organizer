import {useRef, useEffect} from "react"
import styled from 'styled-components'
import focusTrap from '@src/utils/focusTrap'

interface ModalContainerCompProps {
    className?: string,
    children?: React.ReactNode
}

const ModalContainerComp = ({ 
    className,
    children
}: ModalContainerCompProps) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let removeTrap = modalRef.current ? focusTrap(modalRef.current) : null

        return () => {
            if (removeTrap) removeTrap()
        }
    });

    return (
        <div className={className} ref={modalRef}>
            {children}
        </div>
    )
}

interface modalContainerProps {
    size?: "sm" | "md" | "lg"
}

const sizeMap = {
    "sm": "500px",
    "md": "800px",
    "lg": "100px"
}

const ModalContainer = styled(ModalContainerComp).attrs<modalContainerProps>(() => ({})).withConfig({
    shouldForwardProp: (prop) => !["size"].includes(prop),
})`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: ${({ size }) => sizeMap[size || "md"]};
    max-width: 100%;
`

export default ModalContainer