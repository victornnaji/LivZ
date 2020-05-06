import React from 'react'

const IconText = ({icon, h5, p}) => {
    return (
        <div className="col-sm-6 mb--30">
            <div className="feature-widget">
                <div className="widget-icon">
                    <i className={`icon ${icon}`}></i>
                </div>
                <div className="content">
                    <h5>{h5}</h5>
                    <p>{p}</p>
                </div>
            </div>
        </div>
    )
}

export default IconText;
