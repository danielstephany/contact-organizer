import styled from 'styled-components'

interface formInputProps extends React.ComponentProps<'input'> {
    label?: string,
    fullWidth?: boolean,
    error?: boolean | string
}

const FormInputComp = ({
    label,
    className,
    error,
    ...others
}: formInputProps) => {
    return (
        <div className={className}>
            <label className="form-input_label">
                { label && <span className="form-input_label-text">{label}</span>}
                <input 
                    className="form-input_input" 
                    {...others}
                />
            </label>
        </div>
    )
}

const FormInput = styled(FormInputComp).attrs<formInputProps>(({})=>({}))`
    display: flex;
    ${({ fullWidth }) => fullWidth ? `width: 100%;`: ""}
    .form-input_label {
        display: flex;
        flex-direction: column;
        ${({ fullWidth }) => fullWidth ? `width: 100%;` : ""}
    }
    .form-input_label-text {
        display: block;
        font-weight: 400;
    }
    .form-input_input {
        border: 1px solid ${({ error }) => error ? "#ff0000" : "#bbb"};
        border-radius: 4px;
        padding: 4px;
    }
`

export default FormInput as typeof FormInputComp