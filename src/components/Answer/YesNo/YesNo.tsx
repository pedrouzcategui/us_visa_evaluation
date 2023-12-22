import styles from './style.module.css';
import { OptionProps } from '../../types';

export function YesNo({ options }: OptionProps) {
    return (
        <div>
            {
                options.map(option => (
                    <div>
                        <label htmlFor='x' className={styles.label_container}>
                            <input name='x' value={option.value} type='radio' />
                            <span>{option.label}</span>
                        </label>
                    </div>
                ))
            }
        </div>
    )
}
