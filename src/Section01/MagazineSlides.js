import React,{useState, useRef} from "react";
import prev from './../img/icon/prev.png';
import next from './../img/icon/next.png';
import add from './../img/magazine/add.png';
const Magazine = (props)=>{
    const [num , setNum] = useState(1);
    const ref = useRef(1);
    const nextBtn = ()=>{
        if(-1 < num+1 < 7){
            const magazineBox = document.querySelector('.magazines');
            setNum(ref.current += 1);
            magazineBox.classList.add('transition');
            magazineBox.style.marginLeft = -(num+1)*490+'px';
        }
        if(num+1 === 6){
            const magazineBox = document.querySelector('.magazines');
            setTimeout(()=>{
                setNum(ref.current = 0);
                magazineBox.classList.remove('transition');
                magazineBox.style.marginLeft =0+'px';
            },300);
        }
        if(num+1 == 7){
            const magazineBox = document.querySelector('.magazines');
            setTimeout(()=>{
                setNum(ref.current = 1);
                magazineBox.classList.remove('transition');
                magazineBox.style.marginLeft =-490+'px';
            },300);
        }
    }
    const prevBtn = ()=>{
        if(0 < num-1 < 7){
            const magazineBox = document.querySelector('.magazines');
            setNum(ref.current -= 1);
            magazineBox.classList.add('transition');
            magazineBox.style.marginLeft =-(num-1)*490+'px';
        }
        if(num-1 == 0){
            const magazineBox = document.querySelector('.magazines');
            setTimeout(()=>{
                setNum(ref.current = 6);
                magazineBox.classList.remove('transition');
                magazineBox.style.marginLeft = -2940 +'px';
            },300);
        }
    }
    return(
        <div className='content02'>
            <div className="magazine_container">
                <div  className="magazines">
                {props.magazines.map(magazine=>{
                    return(
                        <div key={magazine.id} className="magazine">
                            <h2>{magazine.title}</h2>
                            <div>
                                {magazine.contents}
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