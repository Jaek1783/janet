import React from "react";

const MainEventSlides = (props)=>{
    return(
        <div className='content01'>
        <ul className='slides'>
          {props.mainSlides.map(mainSlide=>{
            return(
              <li key={mainSlide.id} className="slide">
                <img src={mainSlide.img} alt={mainSlide.alt} />
              </li>
            )
          })}
        </ul>
        <p className="eventPage">1/4</p>
      </div>
    )
}; export default MainEventSlides;