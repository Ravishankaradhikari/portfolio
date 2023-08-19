import React, { useContext } from 'react'
import './Toogle.css'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import { themeContext } from '../../Context'
const Toogle = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    const handleClick = () => {
        // debugger 
        theme.dispatch({ type: 'toggle' })
    }
    return (
        <div className='toogle' onClick={handleClick}>
            <Moon />
            <Sun />
            <div className="t-button" style={darkMode ? { left: '2px' } : { right: '2px' }}>
            </div>
        </div>
    )
}

export default Toogle