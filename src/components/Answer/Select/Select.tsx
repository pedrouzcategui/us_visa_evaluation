import styles from "./style.module.css";

export function Select({ options }: { options: string[] }) {
    return (
        <div>
            <label className={styles.label}>Seleccione una opcion:</label>
            <select className={styles.select}>
                {
                    options.map((value: string) => (
                        <option key={`${value}`} value={value}>{value}</option>
                    ))
                }
            </select>
        </div>
    )
}
