import React from 'react'
import './body.css'
import './modal.css'
import Modal from '../Modal/Modal'
import { useModal } from '../Modal/useModal'

const Body = ({ data }) => {

    const [isOpen, openModal, closeModal] = useModal(false)

    const finder = ({id}) => {
        data.find((el) => {
            el.id = id
        })
    }

    return (
        <div className='container'>
            <div>
                <img className='logo' src="https://i.postimg.cc/0j4DD5Sj/logo-sin-fondo.png" alt="logo" />
            </div>
            <div className='image-slider'>
                <div className='cards-container'>
                    {
                        data.map(({ id, src, alt, title }) => {
                            return (
                                <div key={id} className='card'>
                                    <img alt={alt} className='card-img' src={src} />
                                    <p className='text-card'>{title}</p>
                                    <button className='btnInfo' onClick={openModal}>More Info</button>
                                </div>
                            )
                        })
                    }
                </div>
                <Modal isOpen={isOpen} closeModal={closeModal}>
                    {data.map(({id, src, alt, title }) => {
                        return (
                            <div key={id} className='card'>
                                <img alt={alt} className='card-img' src={src} />
                                <p className='text-card'>{title}</p>
                            </div>
                        )
                    })}
                </Modal>
            </div>
        </div>
    )
}

export default Body