import React,{useState, useRef} from "react";

import left from './../img/icon/left.png';
import right from './../img/icon/right.png';

const MainScroll = (props)=>{
    const [num, setNum] = useState(2);
    const numRef = useRef(2);
    const slideRef = useRef(null);
    const total = 9;
    const nextBtn = () => {
      if (num + 1 < total) {
        setNum(numRef.current +=1);
        slideRef.current.style.transition = "all .3s ease-in-out";
        slideRef.current.style.transform = `translateX(-${(num+1)*406}px)`;
      }
      if (num+1 === total-2) {
        setTimeout(() => {
          setNum(numRef.current = 1);
          slideRef.current.style.transition = "none";
          slideRef.current.style.transform = `translateX(-406px)`;
        }, 300);
      }
    };
    const prevBtn = () => {
      if (num - 1 < total) {
        setNum(numRef.current -= 1);
        slideRef.current.style.transition = "all .3s ease-in-out";
        slideRef.current.style.transform = `translateX(-${(num - 1)*406}px)`;
      }
      if (num - 1 === 0) {
        setTimeout(() => {
          setNum(numRef.current = 6);
          slideRef.current.style.transition = "none";
          slideRef.current.style.transform = `translateX(-${2436}px)`;
        }, 300);
      }
    };
    return(
        <div className="section02">
            <div className="scroll_container">
                <ul className="scrollBox" ref={slideRef}>
                {props.scrollImgs.map(scroll=>{
                    return(
                        <li key={scroll.name} className="scroll_item">
                            <img src={scroll.img} alt={scroll.name+'이미지'} />
                        </li>
                    )
                })}
                </ul>
            </div>
                <button className="scrollBtn left"  onClick={()=>{
                            prevBtn();
                        }}><img src={left} alt="이전 이미지" /></button>
                <button className="scrollBtn right"  onClick={()=>{
                            nextBtn();
                        }}><img src={right} alt="이전 이미지" /></button>
        </div>

    )
}; export default MainScroll;