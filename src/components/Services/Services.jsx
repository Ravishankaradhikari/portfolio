import React from 'react'
import './Services.css'
import HeartEmoji from '../../components/img/heartemoji.png'
import Humble from '../../components/img/humble.png'
import Glasses from '../../components/img/glasses.png'
import Card from '../card/Card'
import Resume from './resume.pdf'
import { motion } from 'framer-motion'
const Services = () => {
    // transition 
    const transition = {
        duration: 1,
        type: 'spring',
    }
    return (
        <div className='services' id='Services'>
            {/* left side  */}
            <div className='awesome'>
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    A front-end developer works on the “surface” of software applications or websites,<br></br>
                    creating a functional experience for the end-user. In front-end development, <br></br>
                    one codes the user interface (UI), bringing all of its features to the surface <br></br>
                    and designing the look and feel.!
                </span>
                <a href={Resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>
                <div className="blur s-blurl" style={{ background: '#abf1ff94' }}>

                </div>
            </div>
            {/* right side  */}
            <div className='cards'>
                <motion.div
                    initial={{ left: '25rem', }}
                    whileInView={{ left: '14rem' }}
                    transition={transition}

                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Adobe XD, Photoshop"}
                    />
                </motion.div>
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: '-4rem' }}
                    transition={transition}

                    style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"Html, Css, JavaScript, React"}
                    />
                </motion.div>
                <motion.div
                    initial={{ top: '19rem', left: '25rem' }}
                    whileInView={{ left: '12rem' }}
                    transition={transition}

                    style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"UI UX designers create the user interface for an app, website, or other interactive media. "}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>


            </div>
        </div>
    )
}

export default Services