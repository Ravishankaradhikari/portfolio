import React from 'react'
import './Works.css'
import Upwork from '../../components/img/Upwork.png'
import Fiverr from '../../components/img/fiverr.png'
import Amazon from '../../components/img/amazon.png'
import Shopify from '../../components/img/Shopify.png'
import Facebook from '../../components/img/Facebook.png'
import {motion} from 'framer-motion'

const Works = () => {
    return (
        <div className='Works'>
      <div className="w-left">

            <div className='awesome'>
                <span>Works for All these!</span>
                <span>Brands and Clients</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>
                    Deserunt id vero nemo quas nihil nesciunt iusto rerum <br></br>
                    fuga tempora error!
                </span>
                <button className='button s-button'>Hire Me!</button>
                <div className="blur s-blurl" style={{ background: "#abf1ff94" }}>

                </div>
            </div>
            </div>
            {/* right side */}
            <div className="w-right">
                <motion.div 
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                transition={{duration:3, type:'spring'}}
                
                className="w-mainCircle">

                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>{" "}
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/* background Circle  */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>
        </div>


    )
}

export default Works