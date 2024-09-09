import HeartImage from '@/components/Images/HeartImage';
import styles from './FavButton.module.css';

const FavButton = (props): JSX.Element => {
    return (
        <HeartImage className={styles.favIcon} title="Add to Favorites" {...props} />
    )
}

export default FavButton
