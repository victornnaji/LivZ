import React from 'react'
import { ErrorStyle } from '../../Pages/Join';

const Bubble = ({side, name, message, alert}) => {
    function formatDate(date) {
        const h = "0" + date.getHours();
        const m = "0" + date.getMinutes();
      
        return `${h.slice(-2)}:${m.slice(-2)}`;
    }

    const nm = name;
    name = name?.split(' ').join("+");
    return (
        <>
        {alert ? (
                <ErrorStyle>
                        <div className="alert alert-warning">
                        <div className="alert-container text-center">
                        <b><i className="fa fa-info-circle"></i></b>
                           {message}
                        </div>
                       </div>
              </ErrorStyle>
        ) : (
            <div className={`msg ${side}-msg`}>
            <div className="msg-img" style={{backgroundImage: `url(https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${name})`}}></div>
            <div className="msg-bubble">
                <div className="msg-info">
                <div className="msg-info-name">{nm}</div>
                <div className="msg-info-time">{formatDate(new Date())}</div>
                </div>
                <div className="msg-text">{message}</div>
            </div>
        </div>
        )}
        </>
    )
}

export default Bubble;
