import React from 'react';
import { generatePath } from "react-router";
import { Link } from "react-router-dom";

function PortfolioSingle(props) {
 
    const {id,img,title,filter} = props.info;
    const link =  generatePath("/portfolio-details/:id", {
      id: id,
    });
    return (
        <div className={`col-lg-4 col-md-6 portfolio-item filter-${filter}`}>
        <div className="portfolio-wrap">
          <img src={img} className="img-fluid" alt="Portfolio"/>
          <div className="portfolio-links">
            <a href={img} data-gall="portfolioGallery" className="venobox" title={title}><i className="bx bx-plus"></i></a>
            <Link to={link} title="More Details"><i className="bx bx-link"></i></Link>
          </div>
        </div>
      </div>
    )
}

export default PortfolioSingle
