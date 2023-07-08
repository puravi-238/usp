import styles from './SecondFactor.module.css';

const Passkey = ()=>{
    return(
        <div className={styles.message}>
            <div className={styles.title}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16">
                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
                Authenticate Through Secret Pass Key
            </div>
            <div className={styles.body}>Enter the Passkey which had been generated during your Signup.</div>
            <form>
                <input placeholder='888888'/>
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </form>
        </div>
    );
}

export default Passkey;