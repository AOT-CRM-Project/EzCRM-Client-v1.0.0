import React from 'react';

import styles from './SignupSuccess.module.scss';

import successIcon from '../../../assets/success-icon.svg';

function SignupSuccess() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.sendIcon}>
          <img src={successIcon}></img>
        </div>

        <div className={styles.success}>Success!</div>
        <div className={styles.bottom_container}>
          <div className={styles.content}>
            Please go to your inbox to active your account.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupSuccess;
