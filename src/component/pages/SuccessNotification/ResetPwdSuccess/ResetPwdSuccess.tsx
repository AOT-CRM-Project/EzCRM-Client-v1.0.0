import React from 'react';

import styles from './ResetPwdSuccess.module.scss';

import sendIcon from "../../../assets/send-icon.svg";


function ResetPwdSuccess () {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.sendIcon}>
                <img src={sendIcon}></img>
                </div>
            
            <div className={styles.pending}>Pending...</div>
            <div className={styles.bottom_container}>
                <div className={styles.content}>
                    Please go to your inbox to active your account.
                </div>
            </div>
        </div>
        </div>
        

    );
}

export default ResetPwdSuccess;