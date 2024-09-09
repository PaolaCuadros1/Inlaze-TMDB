import styles from './Preloader.module.css';

const Preloader = (): JSX.Element => {
    return (
        <div className="d-flex justify-content-center">
            <div className={`spinner-border ${styles.spinner}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Preloader