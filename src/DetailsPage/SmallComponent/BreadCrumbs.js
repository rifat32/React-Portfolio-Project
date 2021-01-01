import React from 'react'
import { Link } from "react-router-dom";
function BreadCrumbs() {
    return (
        <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
  
          <div className="d-flex justify-content-between align-items-center">
            <h2>Portfoio Details</h2>
            <ol>
              <li><Link to="/">Home</Link></li>
              <li>Portfoio Details</li>
            </ol>
          </div>
  
        </div>
      </section>
    )
}

export default BreadCrumbs
