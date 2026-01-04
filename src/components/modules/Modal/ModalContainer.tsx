import {useRef, useEffect} from "react"
import styled from 'styled-components'
import focusTrap from '@src/utils/focusTrap'

interface ModalContainerCompProps {
    className?: string,
    children?: React.ReactNode,
    closeModal: () => void
}

const ModalContainerComp = ({ 
    className,
    children,
    closeModal
}: ModalContainerCompProps) => {
    const modalRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        let focusTrapOpt = modalRef.current ? focusTrap(modalRef.current) : null
        focusTrapOpt?.setEscape(closeModal)
        return () => {
            if (focusTrapOpt?.remove) focusTrapOpt?.remove()
        }
    });

    return (
        <div 
            className={className} 
            ref={modalRef}
            role="dialog"
            aria-modal="true"
        >
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
    overflow: auto;
    max-height: 100dvh;
`

export default ModalContainer