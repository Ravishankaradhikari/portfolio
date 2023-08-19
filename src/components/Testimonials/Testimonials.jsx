import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import profilePic1 from '../../components/img/profile1.jpg'
import profilePic2 from '../../components/img/profile2.jpg'
import profilePic3 from '../../components/img/profile3.jpg'
import profilePic4 from '../../components/img/profile4.jpg'
// import {Pagination} from 'swiper'
// import 'swiper/css/pagination'


const Testimonials = () => {
   const clients = [
        {
            img: profilePic1,
            review:
                "Steve & Kate’s camp runs summer camps for children across the U.S. The unique thing about Steve & Kate’s camp is that their entire website is essentially a series of customer testimonials.",
        },
        
        {
            img: profilePic2,
            review:
                "Steve & Kate’s camp runs summer camps for children across the U.S. The unique thing about Steve & Kate’s camp is that their entire website is essentially a series of customer testimonials.",
        },
        {
            img: profilePic3,
            review:
                "Steve & Kate’s camp runs summer camps for children across the U.S. The unique thing about Steve & Kate’s camp is that their entire website is essentially a series of customer testimonials.",
        },
        {
            img: profilePic4,
            review:
                "Steve & Kate’s camp runs summer camps for children across the U.S. The unique thing about Steve & Kate’s camp is that their entire website is essentially a series of customer testimonials.",
        },
    ]
    return (
        
            <div className="t-wrapper" id="testimonials">
                <div className="t-heading">
                    <span className=''>Clients always get </span>
                    <span className=''>Exceptional Work </span>
                    <span className=''>From me..</span>
                    <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                    <div className="blur t-blur2" style={{ background: "skyblule" }}></div>
                </div>
                {/* slider  */}
                <Swiper
                // install Swiper modules 
                    // modules={[Pagination]}
                    // slidesPerView={1}
                    // pagination={{clickable:true}}
                    >
                    {clients.map((client,index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <div className='testimonials'>
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>

            </div>

        
    )
}

export default Testimonials