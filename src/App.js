import React, {useState} from 'react';
import './App.css';
import JobsList from "./components/JobsList";

function App() {
    let [darkMode, setDarkMode] = useState(false);
    let lightColors = {
        '--primary': 'hsl(180, 29%, 50%)',
        '--dark-primary': 'hsl(180, 14%, 20%)',
        '--desaturated': 'hsl(180, 8%, 52%)',
        '--light-primary': 'hsl(180, 52%, 96%)',
        '--shadow': 'rgba(89, 163, 163, .5)',
        '--header-bg': '#64baba',
        '--card-bg': '#ffffff'
    };
    let darkColors = {
        '--primary': '#8AB0AB',
        '--dark-primary': '#559186',
        '--desaturated': '#6d8b87',
        '--light-primary': '#1A1D1A',
        '--shadow': 'rgba(0, 0, 0, 0.22)',
        '--header-bg': '#26413C',
        '--card-bg': '#192a26'
    };
    return (
        <div className={'main-container'}
             style={darkMode ? darkColors : lightColors}>
            <div className={darkMode ? "header dark-header" : "header"}>
            </div>
            <div className="page">
                <JobsList/>
            </div>
         </div>
    );
}

export default App;
