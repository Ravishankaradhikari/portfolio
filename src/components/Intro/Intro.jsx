import React from 'react'
import './Intro.css'
import Github from '../../components/img/github.png'
import LinkedIn from '../../components/img/linkedin.png'
import Instagram from '../../components/img/instagram.png'
import Vector1 from '../../components/img/Vector1.png'
import Vector2 from '../../components/img/Vector2.png'
import boy from '../../components/img/boy.jpg'
import thumbup from '../../components/img/thumbup.png'
import Crown from '../../components/img/crown.png'
import glassesimoji from '../../components/img/glassesimoji.png'
import glasses from '../../components/img/glasses.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { motion } from 'framer-motion'

const Intro = () => {
    const transition = { duration: 2, type: 'spring' }
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hey I' Am</span>
                    <span>Ravi Shankar Adhikari</span>
                    <span>A Front-End Developer is responsible for developing new user-facing features,
                        determining the structure and design of web pages,
                        building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.
                        What makes a good Front End Web Developer?</span>
                </div>

                <button className='button i-button'>Hire Me!</button>
                <div className='i-icons'>
                    <img src={LinkedIn} alt="" />
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className='i-right'>
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInview={{ left: '-24%' }}
                    transition={transition}
                    src={glassesimoji} alt=""></motion.img> 

                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    style={{ top: '-4%', left: '68%' }}
                    className='floating-div'>
                    <FloatingDiv image={Crown} text1='Web' text2='Developer' />
                </motion.div>

                <motion.div
                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    style={{ top: '18rem', left: '0rem' }}
                    className='floating-div'>
                    <FloatingDiv image={thumbup} text1='Best Design' text2='Awards' />
                </motion.div>

                {/* blur div  */}
                <div className='blur' style={{ background: 'rgb(238 210 255)' }}></div>
            </div>
            <div className='blur' style={{ background: '#c1f5ff', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
        </div>
    )
}

export default Intro