import { createPortal } from 'react-dom'
import { useEffect, useRef, useState } from 'react'
import ModalOverlay from './ModalOverlay'
import ModalContainer from './ModalContainer'

const transition = 200;

interface modalProps {
    open: boolean,
    size?: "sm" | "md" | "lg",
    children: React.ReactNode
}

interface IFocusableElement extends Element {
    focus?: () => void
  }

const Modal = ({ 
    open,
    children,
    size="md"
}: modalProps) => {
    const modalTriggerEl = useRef<IFocusableElement>(document.activeElement)
    const fadeInTimer = useRef<ReturnType<typeof setTimeout> >(null);
    const [fadeIn, setFadeIn] = useState(false)
    const [showModal, setShowModal] = useState(open)

    const storeModalTriggerEl = () => {
        const activeElement = document.activeElement;
        if(activeElement) modalTriggerEl.current = activeElement;
    }

    const focusModalTriggerElOnClose = () => {
        if (modalTriggerEl?.current?.focus){
            modalTriggerEl.current.focus()
        }
    }

    const handleFadeIn = () => {
        setShowModal(true)
        fadeInTimer.current = setTimeout(() => {
            setFadeIn(true)
        }, 0)
    }

    const handleFadeOut = () => {
        setFadeIn(false)
        fadeInTimer.current = setTimeout(() => {
            setShowModal(false)
        }, transition)
    }

    useEffect(() => {
        if(open && !fadeIn){
            handleFadeIn()
            storeModalTriggerEl()
        } else {
            handleFadeOut()
            focusModalTriggerElOnClose()
        }

    }, [open])

    return (
        showModal ? 
        createPortal(
            <ModalOverlay 
                fadeIn={fadeIn}                
            >
                <ModalContainer size={size}>
                    {children}
                </ModalContainer>
            </ModalOverlay>, 
            document.body
        ) 
        : null
    )
}

export default Modal