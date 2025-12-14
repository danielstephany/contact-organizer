import styled from 'styled-components'

interface modalContainerProps {
    size?: "sm" | "md" | "lg"
}

const sizeMap = {
    "sm": "500px",
    "md": "800px",
    "lg": "100px"
}

const ModalContainer = styled.div.attrs<modalContainerProps>(() => ({})).withConfig({
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