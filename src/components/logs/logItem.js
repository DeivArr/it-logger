import React from 'react';
import Momment from 'react-moment';

const logItem = ({log}) => {
    return (
        <li className = "collection-item"> 
            <div>
                <a href = '#eidt-log-modal' 
                    className = {`modal-trigger ${
                        log.attention ? 'red-text' : 'blue-text'
                    }`}>
                    {log.message}
                </a>
                <span className = "grey-text">
                    <span className = "black-text">ID # {log.id}</span>
                    <span className = "black-text">{log.tech}</span> on
                    <Momment format = "MMMM Do YYYY" />
                </span>
            </div>
        </li>
    )
}

export default logItem
