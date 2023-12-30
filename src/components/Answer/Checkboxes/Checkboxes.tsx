import style from "./style.module.css"

export function Checkboxes({ options }: { options: string[] }) {
    return (
        <div>
            <label>
                <span className={style.span}>Seleccione las que apliquen: </span>
                <div className={style.checkbox_row}>
                    {options.map((value) => (
                        <div key={`${value}`}>
                            <input type="checkbox" value={value} /><span>{value}</span>
                        </div>
                    ))}
                </div>
            </label>
        </div>
    )
}
