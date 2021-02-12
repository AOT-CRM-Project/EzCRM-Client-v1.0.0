// import styles from "./LogPagesProps.module.scss";
import './AccountPageTemplate.scss';
import React from 'react';

export default function AccountPageTemplate({active, header, children, footer}) {

    let className = 'mainPage';

    if(active) {
        className += ' mainPage-active'
    }


    return(
        <div className={className}>
            <h1 className="pageHeader">{header}</h1>
            
            <div >{children}</div>
            <div className="pageFooter">{footer}</div>
        </div>
    );
} 