import { useState } from 'react';
import Passkey from './Passkey';
import styles from './SecondFactor.module.css';

const SecondFactor = ()=>{
    const [chosenNavBar, setNavBar] = useState('');
    return(
        <div className={styles.dialog}>
            <div className={styles.navBar}>
                <div
                    onClick={(state)=>{if(state==='')setNavBar('OTP')}}  
                    className={`${styles.navButton} ${chosenNavBar==='OTP'?styles.selected:''}`}>
                    OTP
                </div>
                <div
                    onClick={(state)=>{if(state==='')setNavBar('TOTP')}}  
                    className={`${styles.navButton} ${chosenNavBar==='TOTP'?styles.selected:''}`}>
                    TOTP
                </div>
                <div
                    onClick={(state)=>{if(state==='')setNavBar('PASSKEY')}} 
                    className={`${styles.navButton} ${chosenNavBar==='PASSKEY'?styles.selected:''}`}>
                    PASSKEY
                </div>
            </div>
            <Passkey/>
        </div>
    );
}

export default SecondFactor;