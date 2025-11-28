import styled from 'styled-components'

interface gridProps {
    container?: boolean, 
    spacingX?: number,
    spacingY?: number, 
    spacing?: number, 
    size?: 1|2|3|4|5|6|7|8|9|10|11|12
}

const initialSpacing = 16;

const Grid = styled.div.attrs<gridProps>(({
    spacing,
}) => ({
    spacing: spacing || initialSpacing,
}))`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-start;
    ${({ container, spacing, spacingX, spacingY}) =>  container && `
        width: calc(100% + ${(spacingX || spacing || initialSpacing) * 2}px);
        margin-left: -${spacingX || spacing}px;
        margin-right: -${spacingX || spacing}px;
        margin-top: -${spacingY || spacing}px;
        margin-bottom: -${spacingY || spacing}px;
        > div {
            flex-grow: 1;
            padding-top: ${spacingY || spacing}px;
            padding-bottom: ${spacingY || spacing}px;
            padding-left: ${spacingX || spacing}px;
            padding-right: ${spacingX || spacing}px;
        }
    `}
    ${({ size }) => size ? `width: ${(8.333 * size).toFixed(2)}%;` : ""}
`

export default Grid;