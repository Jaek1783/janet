import React,{useRef, useState} from "react";
import prev from './../img/icon/prev.png';
import next from './../img/icon/next.png';
import Top10N01 from '../Section01/Top10_items/Top10_01';
const Top10 = ({top10s, contents_top10_01})=> {
    const [num, setNum] = useState(1);
    const slideRef = useRef(null);
    const numRef = useRef(1);
    const total = 6;
    const nextBtn = () => {
      if (num + 1 < total) {
        setNum(numRef.current += 1);
        slideRef.current.style.transition = "all .3s ease-in-out";
        slideRef.current.style.transform = `translateX(-${(num + 1)*2}00px)`;
      }
      if (num + 1 === total-1) {
        setTimeout(() => {
          setNum(numRef.current = 1);
          slideRef.current.style.transition = "none";
          slideRef.current.style.transform = `translateX(-200px)`;
        }, 300);
      }
    };
    const prevBtn = () => {
      if (num - 1 < total) {
        setNum(numRef.current -= 1);
        slideRef.current.style.transition = "all .3s ease-in-out";
        slideRef.current.style.transform = `translateX(-${(num - 1)*2}00px)`;
      }
      if (num - 1 === 0) {
        setTimeout(() => {
          setNum(numRef.current = 4);
          slideRef.current.style.transition = "none";
          slideRef.current.style.transform = `translateX(-800px)`;
        }, 300);
      }
    };
    return(
        <div className="top_container">
            <div className="top10s">
                <div className="top10" ref={slideRef}>
                    {top10s.map(top10=>{
                        return(
                            <div key={top10.id}>
                                <h1 className="top10_title">{top10.title}</h1>
                                <ul>
                                    <li><Top10N01 contents_top10_01={contents_top10_01}/></li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <div className="btnBox">
                    <button className="prev btn" onClick={prevBtn}><img src={prev} alt="prev이미지" /></button>
                    <button className="next btn" onClick={nextBtn}><img src={next} alt="next이미지" /></button>
                </div>
            </div>
        </div>
    )
}; export default Top10;