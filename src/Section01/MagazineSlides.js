import React from "react";

const Magazine = (props)=>{
    return(
        <div className='content02'>
            <div className="magazine_container">
                <div  className="magazines">
                {props.magazines.map(magazine=>{
                    return(
                        <div key={magazine.title} className="magazine">
                            <h2>{magazine.title}</h2>
                            <div>
                                {magazine.contents}
                            </div>
                        </div>
                    )
                })}
                <div>
                    <button className="prev"></button>
                    <button className="next"></button>
                </div>
                </div>
            </div>
      </div>
    )
};export default Magazine;