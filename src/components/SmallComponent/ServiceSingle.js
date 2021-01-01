import React from 'react'

function ServiceSingle(props) {
    const {iconClass,title,description} = props.info;
    return (
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
        <div className="icon"><i className={iconClass}></i></div>
        <h4 className="title"><a href="#a">{title}</a></h4>
        <p className="description">{description}</p>
      </div>
    )
}

export default ServiceSingle
