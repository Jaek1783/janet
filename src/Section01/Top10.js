import React from "react";
import prev from './../img/icon/prev.png';
import next from './../img/icon/next.png';

const Top10 = (props)=> {
    return(
        <div className="top_container">
            <div className="top10s">
                <div className="top10">
                    {props.top10s.map(top10=>{
                        return(
                            <div key={top10.title}>
                                <h1 className="top10_title">{top10.title}</h1>
                                <ul>
                                    <li>{top10.contents}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <div className="btnBox">
                    <button className="prev btn"><img src={prev} alt="prev이미지" /></button>
                    <button className="next btn"><img src={next} alt="next이미지" /></button>
                </div>
            </div>
        </div>
    )
}; export default Top10;