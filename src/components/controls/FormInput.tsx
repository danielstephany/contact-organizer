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
                    className={"form-input_input" + (!!error ? " form-input_error" : "")}
                    {...others}
                />
                {
                    typeof(error) === 'string' ?
                        <span className="form-input_error-text">{error}</span> 
                    : null
                }
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
        margin-bottom: 2px;
    }
    .form-input_input {
        border: 1px solid ${({ error }) => error ? "#ff0000" : "#bbb"};
        border-radius: 4px;
        padding: 6px;
    }
    .form-input_error-text {
        display: block;
        font-size: 12px;
        color: #ff0000;
        margin-top: 4px;
    }
`

export default FormInput as typeof FormInputComp