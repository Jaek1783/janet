import React from "react";

const MainEventSlides = (props)=>{
    return(
        <div className='content01'>
        <ul className='slides'>
          {props.mainSlides.map(mainSlide=>{
            return(
              <li key={mainSlide.id}>
                <img src={mainSlide.img} alt={mainSlide.alt} />
              </li>
            )
          })}
        </ul>
        <p className="eventPage">/</p>
      </div>
    )
}; export default MainEventSlides;