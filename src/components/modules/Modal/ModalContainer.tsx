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

    const handleEscapeModal = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeModal()
        }
    }

    useEffect(() => {
        let removeTrap = modalRef.current ? focusTrap(modalRef.current) : null
        modalRef.current?.addEventListener("keydown", handleEscapeModal)

        return () => {
            if (removeTrap) removeTrap()
            modalRef.current?.removeEventListener("keydown", handleEscapeModal)
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