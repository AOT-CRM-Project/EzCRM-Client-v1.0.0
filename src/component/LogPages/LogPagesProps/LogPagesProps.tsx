import "./LogPagesProps.scss";
import React from 'react';

export default function LogPagesProps({active, header, children, footer}) {

    let className = 'mainPage';

    if(active) {
        className += ' mainPage-active'
    }


    return(
        <div className={className}>
            <h1 className="pageHeader">{header}</h1>
            
            <div className="pageContent">{children}</div>
            <div className="pageFooter">{footer}</div>
        </div>
    );
} 