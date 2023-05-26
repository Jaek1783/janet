import React,{useState, useRef} from "react";
import prev from './../img/icon/prev.png';
import next from './../img/icon/next.png';
import add from './../img/magazine/add.png';

import MagazineInfo from '../Section01/Magazine_items/Magazine_info';
const Magazine = ({magazines, informations})=>{
    const [num, setNum] = useState(1);
    const numRef = useRef(1);
    const slideRef = useRef(null);
    const total = 8;
    const nextBtn = () => {
      if (num + 1 < total) {
        setNum(numRef.current +=1);
        slideRef.current.style.transition = "all .3s ease-in-out";
        slideRef.current.style.transform = `translateX(-${(num+1)*490}px)`;
      }
      if (num+1 === total-1) {
        setTimeout(() => {
          setNum(numRef.current = 1);
          slideRef.current.style.transition = "none";
          slideRef.current.style.transform = `translateX(-490px)`;
        }, 300);
      }
    };
    const prevBtn = () => {
      if (num - 1 < total) {
        setNum(numRef.current -= 1);
        slideRef.current.style.transition = "all .3s ease-in-out";
        slideRef.current.style.transform = `translateX(-${(num - 1)*490}px)`;
      }
      if (num - 1 === 0) {
        setTimeout(() => {
          setNum(numRef.current = 6);
          slideRef.current.style.transition = "none";
          slideRef.current.style.transform = `translateX(-${2940}px)`;
        }, 300);
      }
    };
    return(
        <div className='content02'>
            <div className="magazine_container">
                <div  className="magazines" ref={slideRef}>
                {magazines.map(magazine=>{
                    return(
                        <div key={magazine.id} className="magazine">
                            <h2>{magazine.title}</h2>
                            <div>
                            <MagazineInfo informations={informations}/>
                            </div>
                        </div>
                    )
                })}
                </div>
                    <div className="btnBox">
                        <button className="prev btn" onClick={()=>{
                            prevBtn();
                        }}><img src={prev} alt="prev이미지" /></button>
                        <button className="next btn" onClick={()=>{
                            nextBtn();
                        }}><img src={next} alt="next이미지" /></button>
                    </div>
                </div>
                <div className="add"><img src={add} alt="광고이미지" /></div>
      </div>
    )
};export default Magazine;