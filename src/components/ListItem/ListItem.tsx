import styles from './styles.module.css'
import StatusIcon from '../../../../incode-test/src/assets/svg/ui/StatusIcon'
const ListItem: React.FC = () => {
    return (
        <>
            <div className={styles.item}>
                <div className={styles.itemImage}>
                    Image here
                </div>
                <div className={styles.itemInfo}>
                    <ul>
                        <li className={styles.itemName}>Aqua Rick</li>
                        <li className={styles.itemStatus}>
                            <StatusIcon color="red" /> unknown - Humanoid
                        </li>
                        <li className={styles.itemTitle}>Last known location:</li>
                        <li className={styles.itemLine}>Earth (C-137)</li>

                        <li className={styles.itemTitle}>First seen in:</li>
                        <li className={styles.itemLine}>Meeseeks and Destroy</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default ListItem;
