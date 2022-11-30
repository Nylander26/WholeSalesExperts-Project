import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import Navbar from './components/Navbar/Navbar.jsx'
import GrinderTray from './assets/Grinder with Tray/grinder.png'
import GrindePipe from './assets/Grinder with Pipe/grinder 2-1.png'
import Body from './components/Body/Body';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    const data = [{
        id: 1,
        src: GrinderTray,
        alt: "Grinder with Tray",
        title: "Arauka Grinder 2.5 with tray.",
        description: "Arauka Grinder 2.5 with tray. 4 layers, Shock resistant, strong magnet lid, compact include cleaning tool.",
        price: "$15.99"
    },
    {
        id: 2,
        src: GrindePipe,
        alt: "Grinder with Pipe",
        title: "Arauka Grinder 2.5 with metal pipe",
        description: "Arauka Grinder 2.5 4 layers with metal pipe. Strong magnet lid, Shock resistant. Include cleaning tool.",
        price: "$22.99"
    }
    ]

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <Navbar/>
            <Body data={data}/>
        </div>
    );
}

export default App;
