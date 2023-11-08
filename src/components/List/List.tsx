import styles from './styles.module.css'
import ListItem from '../ListItem/ListItem';

const List: React.FC = () => {
    return (
        <>
            <div className={styles.list}>
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        </>
    )
}
export default List;
