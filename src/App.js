import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import Navbar from './components/Navbar/Navbar.jsx'
import Logo from './components/Logo/Logo.jsx'
import GrinderTray from './assets/Grinder with Tray/grinder.png'
import GrinderTray2 from './assets/Grinder with Tray/grinder 1-2.png'
import GrinderPipe from './assets/Grinder with Pipe/grinder 2-1.png'
import GrinderPipe2 from './assets/Grinder with Pipe/grinder 2-2.png'
import GrinderPipe3 from './assets/Grinder with Pipe/grinder 2-3.png'
import Body from './components/Body/Body';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    const data = [{
        id: 1,
        src: GrinderTray,
        src2: GrinderTray2,
        alt: "Grinder With Tray",
        title: "Arauka Grinder 2.5 Inches With Tray",
        description: "Arauka Grinder 2.5 Inches With Tray, Four Layers, Shock Resistant, Strong Magnet Lid, Compact Include Cleaning Tool.",
        price: "$15.99"
    },
    {
        id: 2,
        src: GrinderPipe,
        src2_2: GrinderPipe2,
        src2_3: GrinderPipe3,
        alt: "Grinder With Pipe",
        title: "Arauka Grinder 2.5 Inches With Metal Pipe",
        description: "Arauka Grinder 2.5 Inches, Four Layers With Metal Pipe, Strong Magnet Lid, Shock Resistant, Include Cleaning Tool.",
        price: "$22.99"
    }
    ]

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit} />
            <Navbar />
            <Logo />
            <div className='image-slider'>
                {data.map(({ id, src, src2, src2_2, src2_3, alt, description, price, title }) => {
                        return (
                            <Body
                                data={data}
                                key={id}
                                id={id}
                                src={src}
                                alt={alt}
                                description={description}
                                price={price}
                                title={title}
                                src2={src2}
                                src2_2={src2_2}
                                src2_3={src2_3} />
                        )
                    })}
            </div>
        </div>
    );
}

export default App;
