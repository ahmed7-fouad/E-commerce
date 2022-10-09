import React from 'react'
import Slider from 'react-slick';
import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/des.jpeg'
import '../../../styles/Slider.css'
const TestimonialSlider=()=>{
    const setting ={
        dots:true,
        autoplay:true,
        infinite:true,
        speed:3000,
        autoplaySpeed:3000,
        swipeToSlide:true,
        slidesToShow:1,
        slidesToScroll:1,
    }
return(
 <Slider {...setting}>
    <div>
        <p className="review__text">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero doloribus accusantium quidem rem tempore qui sapiente, nemo quaerat, nostrum distinctio rerum laborum, provident molestias eveniet aliquam similique? Perferendis, molestias soluta?"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
            <img src={ava01}alt='avatar' className=' rounded' />
            <h6>Jhon Doe</h6>
        </div>
    </div>
    <div>
          <p className="review__text">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero doloribus accusantium quidem rem tempore qui sapiente, nemo quaerat, nostrum distinctio rerum laborum, provident molestias eveniet aliquam similique? Perferendis, molestias soluta?"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
            <img src={ava02}alt='avatar' className=' rounded' />
            <h6>Mitchel Marsh</h6>
        </div>
    </div>
    <div>
              <p className="review__text">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero doloribus accusantium quidem rem tempore qui sapiente, nemo quaerat, nostrum distinctio rerum laborum, provident molestias eveniet aliquam similique? Perferendis, molestias soluta?"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
            <img src={ava03}alt='avatar' className=' rounded' />
            <h6>Omar Desouky</h6>
        </div>
    </div>
 </Slider> 
)
}
export default TestimonialSlider; 