import styled from 'styled-components'

interface dataDisplayProps {
    label: string,
    data?: string,
    className?: string
}

const DataDisplayComp = ({
    label,
    data,
    className
}: dataDisplayProps) => {
    return (
        <div className={className}>
            <dt>{label}</dt>
            <dd>{data || ""}</dd>
        </div>
    )
}

const DataDisplay = styled(DataDisplayComp)`
    > dt {
        font-weight: 500;
        margin: 0 0 4px 0;
        padding: 0;
    }
    > dd {
        margin: 0;
        padding: 0;
    }
`

export default DataDisplay