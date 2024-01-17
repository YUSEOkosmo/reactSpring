import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'; //이게 변수?

function App() {
    const [message, setMessage] = useState("")

    useEffect(() => {
        fetch('/api/data').then(response => response.text())
        .then(message => {
            setMessage(message);
        });
    },[])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">{message}</h1>
            </header>
            <p className="App-intro">
                HIHIHIHIHIHII
            </p>
        </div>
    );
}

export default App;
