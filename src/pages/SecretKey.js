import styles from './SecretKey.module.css';

const SecretKey = ()=>{
    return(
        <div className={styles.dialog}>
            You have been registered successfully!
            <div className={styles.key}>911456</div>
            Please remember this Key for authenticating in the future. Note that this key will never be shown to you again. 
        </div>
    );
}

export default SecretKey;