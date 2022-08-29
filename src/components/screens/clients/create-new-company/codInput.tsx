import InputMask from "react-input-mask";

export default (props) => {
    return (
        <InputMask
            mask='99.999.999/9999-99'
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
        >
        </InputMask>
    )
}