import React from 'react'
import { Progress } from 'reactstrap';

function ProgressBar(props) {
    const {skill,value} = props.info
    return (
        <div>
           <div className="progress">
                <span className="skill">{skill} <i className="val">{value}%</i></span>
                <div className="progress-bar-wrap">
                <Progress value={value}></Progress>
                </div>
              </div> 
        </div>
    )
}

export default ProgressBar
