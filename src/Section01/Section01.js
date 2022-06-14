import React from "react";

const Section01 = (props)=>{
    return(
        <div className='section01'>
            <div className='contents'>
                {props.contents.map(content=>{
                    return(
                        <div key={content.name}>
                            {content.body}
                        </div>
                )
            })}
            </div>
        </div>
    )
}; export default Section01;