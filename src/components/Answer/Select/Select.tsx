import styles from "./style.module.css";
import { OptionProps } from '../../types';

export function Select({ options }: OptionProps) {
    return (
        <div>
            <label className={styles.label}>Seleccione una opcion:</label>
            <select className={styles.select}>
                {
                    options.map(({ value, label }) => (
                        <option key={`${label}-${value}`} value={value}>{label}</option>
                    ))
                }
            </select>
        </div>
    )
}
