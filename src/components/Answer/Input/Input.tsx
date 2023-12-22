import style from "./style.module.css"

type InputProps = {
    placeholder?: string;
}

export function Input({ placeholder }: InputProps) {
    return (
        <div>
            <label className={style.label_container}>
                <span>Tu Repuesta:</span>
                <input placeholder={placeholder} type="text" className={style.input} />
            </label>
        </div>
    )
}
