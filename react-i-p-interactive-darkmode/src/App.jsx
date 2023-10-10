//import logo from './logo.svg';
import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import './App.css';


export default function App() {
    
    const [darkMode, setDarkMode] = React.useState(false)
    function toggleDarkMode() {
        setDarkMode(function(prevMode) {
            return !prevMode
        })
    }
    console.log(darkMode)
    return (
        <div className="container">
            <Navbar
                toggleDarkMode={toggleDarkMode}  
                darkMode={darkMode}
            />
            <Main   
                darkMode={darkMode}
            />
        </div>
    )
}
