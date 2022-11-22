import React from 'react'
import './body.css'
import GrinderTray from '../../assets/Grinder with Tray/grinder.png'
import GrindePipe from '../../assets/Grinder with Pipe/grinder 2-1.png'

const Body = () => {

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
        <div className='container'>
            <div>
                <img className='logo' src="https://i.postimg.cc/0j4DD5Sj/logo-sin-fondo.png" alt="" />
            </div>
            <div className='image-slider'>
                <div className='cards-container'>
                    {
                        data.map(({ id, src, alt, title }) => {
                            return (
                                <div key={id} className='card'>
                                    <img alt={alt} className='card-img' src={src} />
                                    <p className='text-card'>{title}</p>
                                    <button className='btnInfo'>More Info</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Body