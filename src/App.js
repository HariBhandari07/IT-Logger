import React, {useEffect} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min'

function App() {
    useEffect(() => {
        // Init Materialize JS
        M.AutoInit()
    })
    return (
        <div className="App">
            Hari Bhandari
        </div>
    );
}

export default App;
