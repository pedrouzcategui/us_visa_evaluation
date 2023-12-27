import style from "./style.module.css"
import { OptionProps } from '../../types';

export function Checkboxes({ options }: OptionProps) {
    return (
        <div>
            <label>
                <span className={style.span}>Seleccione las que apliquen: </span>
                <div className={style.checkbox_row}>
                    {options.map(({ value, label }) => (
                        <div key={`${label}-${value}`}>
                            <input type="checkbox" value={value} /><span>{label}</span>
                        </div>
                    ))}
                </div>
            </label>
        </div>
    )
}
