import styled from 'styled-components'

interface modalOverlayProps {
    fadeIn: boolean,
}

const ModalOverlay = styled.div.attrs<modalOverlayProps>(() => ({})).withConfig({
    shouldForwardProp: (prop) => !["fadeIn"].includes(prop),
})`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, 0.2);
    opacity: ${({ fadeIn }) => fadeIn ? "1" : "0"};
    transition: opacity 0.2s ease;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`

export default ModalOverlay