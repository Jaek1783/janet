import React,{useState, useRef} from "react";

import left from './../img/icon/left.png';
import right from './../img/icon/right.png';

const MainScroll = (props)=>{
    const [num , setNum] = useState(2);
    const ref = useRef(2);
    const nextBtn = ()=>{
        if(-1 < num+1 < 7){
            console.log(ref.current.focus());
            const scrollBox = document.querySelector('.scrollBox');
            setNum(ref.current += 1);
            scrollBox.classList.add('transition');
            scrollBox.style.marginLeft = -(num+1)*406+'px';
        }
        if(num+1 === 6){
            const scrollBox = document.querySelector('.scrollBox');
            setTimeout(()=>{
                setNum(ref.current = 0);
                scrollBox.classList.remove('transition');
                scrollBox.style.marginLeft =0+'px';
            },300);
        }
        if(num+1 == 7){
            const scrollBox = document.querySelector('.scrollBox');
            setTimeout(()=>{
                setNum(ref.current = 1);
                scrollBox.classList.remove('transition');
                scrollBox.style.marginLeft =-406+'px';
            },300);
        }
    }
    const prevBtn = ()=>{
        if(num-1 < 7){
            setNum(ref.current -= 1);
            const scrollBox = document.querySelector('.scrollBox');
            scrollBox.classList.add('transition');
            scrollBox.style.marginLeft =-(num-1)*406+'px';
        }
        if(num-1 == 0){
            const scrollBox = document.querySelector('.scrollBox');
            setTimeout(()=>{
                setNum(ref.current = 6);
                scrollBox.classList.remove('transition');
                scrollBox.style.marginLeft = -2436 +'px';
            },300);
        }
    }
    return(
        <div className="section02">
            <div className="scroll_container">
                <ul className="scrollBox">
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