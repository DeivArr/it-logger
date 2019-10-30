import React, {Fragment, useEffect} from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';

const App = () =>{
  useEffect(() => {
    Materialize.AutoInit();
  })

  return (
    <Fragment> 
      <SearchBar />
      <div className = "container">
        <AddBtn /> 
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;