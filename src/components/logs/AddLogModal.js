import React, {useState} from 'react'
import Materialize from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = props => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if(message === '' || tech === '')
        {
            Materialize.toast({html: 'Please Fill the message and tech fields'});
        }
        else
        {
            console.log(message, tech, attention);

            setMessage('');
            setTech('');
            setAttention(false);
        }
    }

    return (
        <div id = 'add-log-modal' className = "modal" style = {modalStyle}>
            <div className = "modal-content">
                <h4>Enter system log</h4>
                <div className = "row">
                    <div className = "input-field">
                        <input type = "text" 
                        name = "message" 
                        value = {message} 
                        onChange = {e => setMessage(e.target.value)} />
                        <label htmlFor = "message" className = "active">
                            Log Message
                        </label>
                    </div>
                </div>

                <div className =" row">
                    <div className = "input-field">
                        <select 
                        name = "tech" 
                        value = {tech}
                        className = "browser-default" 
                        onChange = {e => ( setTech(e.target.value)  )} >
                        <option value = "" disabled>
                            Select
                        </option>
                        <option value = "David">David</option>
                        <option value = "Azael">Azael</option>
                        <option value = "Jonathan">Jonathan</option>
                        </select>
                    </div>
                </div>

                <div className = "row">
                    <div className = "input-field">
                        <p>
                            <label>
                                <input 
                                type = "checkbox" 
                                className = "filled-in"
                                checked = {attention}
                                value = {attention}
                                onChange = {e => setAttention(!attention)}
                                />
                            <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>

            <div className = "modal-footer">
                <a href = "#" 
                onClick = {onSubmit} 
                className = "modal-close waves-effect waves-blue waves-light btn" >
                    Enter
                </a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
};

export default AddLogModal
