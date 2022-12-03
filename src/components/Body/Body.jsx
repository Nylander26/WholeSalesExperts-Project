import React, { useState } from 'react'
import './body.css'
import './modal.css'

const Body = ({ data, id, src, src2, src2_2, src2_3, alt, description, price, title }) => {

    const [saveId, setSaveId] = useState(data)
    const [isOpen, setIsOpen] = useState(true)

    const handleId = (obj) => {

        const { id } = obj
        const arr = [...data]
        arr.find(finder => console.log(finder.id === id))
        console.log(saveId)
        setSaveId(arr)
    }

    const openModal = () => {

        handleId({
            id: id,
            title: title,
        })

        setIsOpen(true)
    }

    const closeModal = () => setIsOpen(false)

    return (
        <>
            <div className='container'>
                <div className='cards-container'>
                    <div key={id} className='card'>
                        <img alt={alt} className='card-img' src={src} />
                        <p className='text-card'>{title}</p>
                        <button className='btnInfo' onClick={openModal}>More Info</button>
                    </div>
                </div>
            </div>
            <article className={isOpen ? 'modal' : 'modal-close'} key={id}>
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className='modal-img-container'>
                        <img src={src} alt={alt} className="product-img" />
                        {id === 1 ? <img src={src2} alt={alt} className="product-img" /> : ""}
                        {id === 2 ? <img src={src2_2} alt={alt} className="product-img" /> : ""}
                        {id === 2 ? <img src={src2_3} alt={alt} className="product-img" /> : ""}
                    </div>
                    <div className='modal-text-container'>
                        <p className='product-title'><strong>Title: </strong>{title}</p>
                        <p className='product-description'><strong>Description: </strong>{description}</p>
                        <p className='product-price'><strong>Price: </strong>{price}</p>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Body