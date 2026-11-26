import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className='Header'>
            <h3>🏃‍♂️나만의 달리기 기록🏃‍♀️</h3>

            <div className="date-header">
                <h1>{new Date().toDateString()}</h1>
                <img src="/Jogging Lottie JSON animation.gif" alt="Jogging animation" />
            </div>
        </header>
    )
}

export default Header