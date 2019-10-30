import React from 'react';
import Momment from 'react-moment';
import PropTypes from 'prop-types';

const logItem = ({log}) => {
    return (
        <li className = "collection-item"> 
            <div>
                <a href = '#edit-log-modal' 
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
                <a href = "" className = "secondary-content">
                    <li className = "material-icons grey-text">delete</li>
                </a>
            </div>
        </li>
    )
}

logItem.propTypes = {
    log: PropTypes.object.isRequired
};

export default logItem
