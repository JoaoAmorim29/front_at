import InputMask from "react-input-mask";

const codInput = (props: any) => {
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

export default codInput