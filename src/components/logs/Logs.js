import React, {useState, useEffect} from 'react'
import LogItem from './logItem';
import PreLoader from '../layout/PreLoader';

const Logs = props => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
    }, []);

    const getLogs = async () =>{
        setLoading(true);
        const res = await fetch('http://localhost:5000/logs');
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }

    if(loading)
    {
        return <PreLoader />;
    }

    return (
        <ul className = "collection with-header">
            <li className = "collection-header">
                <h4 className = "center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (
                <p className = "center">No logs to show...</p>
            ): (
                logs.map(log => <LogItem log = {log} key = {log.id} />)
            )}
        </ul>
    )
}

export default Logs
