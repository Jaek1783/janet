import React,{useState, useRef, useEffect} from "react";

const MainEventSlides = (props)=>{
  const [num, setNum] = useState(1);
  const slideRef = useRef(null);
  const numRef = useRef(1);
  const total = 6;
  useEffect(() => {
    const Timer = setInterval(() => {
      setNum((numRef.current += 1));
      if (numRef.current < total) {
        setNum(numRef.current);
        slideRef.current.style.transition = "all .3s ease-in-out";
        slideRef.current.style.transform = `translateX(-${numRef.current*4}00px)`;
      }
      if (numRef.current === total-1) {
        setTimeout(() => {
          setNum((numRef.current = 1));
          slideRef.current.style.transition = "none";
          slideRef.current.style.transform = `translateX(-400px)`;
        }, 300);
      }
    }, 4000);
    return () => clearInterval(Timer);
  }, []);
    return(
        <div className='content01'>
        <ul className='slides' ref={slideRef}>
          {props.mainSlides.map(mainSlide=>{
            return(
              <li key={mainSlide.id} className="slide">
                <img src={mainSlide.img} alt={mainSlide.alt} />
              </li>
            )
          })}
        </ul>
        <p className="eventPage">{numRef.current === 5? 1+"/4":numRef.current+"/4"}</p>
      </div>
    )
}; export default MainEventSlides;