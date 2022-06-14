import React from "react";

import hot from './../img/keyword/hot.webp'

const Keyword = (props)=> {

    return(
        <div className="section03">
            <h1>
                <span className="hot_icon"><img src={hot} alt="hot_keyword아이콘" /></span>
                <span className="hot_ hot_hot">HOT</span>
                <span className="hot_ hot_keyword">키워드</span>
                <span className="hot_ hot_top20">Top20</span>
            </h1>
            <ul className="key_container">
                {props.keywords.map(key=>{
                    return(
                        <li key={key.id} className="key_item">
                            <a href="#">
                            <div className="keyImg">
                                <img src={key.img} alt={key.title+"백드라운드 이미지"} />
                                <h3 className="key_title">{key.title}</h3>
                                <h5 className="date">D-Day</h5>
                            </div>
                            <div className="key_text">
                            <p>시행기관 : {key.licenseOrgan}</p>
                            <span>시행일 : {key.esRegdt}</span>
                            </div>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}; export default Keyword;