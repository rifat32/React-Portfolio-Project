
import React,{Component} from 'react';
import BreadCrumbs from './SmallComponent/BreadCrumbs';
import portfolioObj from '../components/SmallComponent/PortfolioObject';
import Scripts from '../DetailsScript';

class PortfolioDetails extends Component {
  constructor(props){
super(props)
this.Pobj = portfolioObj.filter(el => {
  return el.id === this.props.match.params.id
 })
this.state = {
 details: this.Pobj[0]
}
  }
  
  
  componentDidUpdate = (prevProps) => {
    if(this.props.match.params.id !== prevProps.match.params.id ) {
      const Uobj = portfolioObj.filter(el => {
        return el.id === this.props.match.params.id
       })
      this.setState({
        details: Uobj
      })
   };
  };
  componentDidMount() {
    if(window){
      Scripts();
    }
  }
  render(){
   const style = {
    width:'100px',cursor:'pointer'
   }
    const {imgDetails1,imgDetails2,imgDetails3,category,client,date,url,description} = this.state.details;
    return (
      <>
       <BreadCrumbs/> 
       <section id="portfolio-details" className="portfolio-details">
    <div className="container">

      <div className="portfolio-details-container">

         <div className="portfolio-details-carousel" id="base2">
         <img src={imgDetails1} className="img-fluid"  alt="Portfolio"/>
          <img src={imgDetails2} className="img-fluid "  alt="Portfolio"/>
          <img src={imgDetails3} className="img-fluid" alt="Portfolio"/>
       </div>
       <div id='customize-thumbnails2' className='text-center mb-2'>
       <img src={imgDetails1} style={style} className="img-fluid"  alt="Portfolio"/>
          <img src={imgDetails2} style={style} className="img-fluid "  alt="Portfolio"/>
          <img src={imgDetails3} style={style} className="img-fluid" alt="Portfolio"/>
      </div>
     
      <div className='text-center  d-none' >
      <div id='customize-controls2' >
      <button className='btn btn-primary btn-small'>Prev</button>
      <button className='btn btn-primary btn-small'>Next</button>
        
      </div>
      </div>
      <div className='text-center'>
      <button className='btn btn-primary btn-small' id='customize-toggle2'> </button>
      </div>



        <div className="portfolio-info">
          <h3>Project information</h3>
          <ul>
            <li><strong>Category</strong>: {category}</li>
            <li><strong>Client</strong>: {client}</li>
            <li><strong>Project date</strong>:{date}</li>
            <li><strong>Project Link</strong>: <a rel="noopener noreferrer" className='btn btn-primary btn-small' target='_blank' href={url}>Click And Go</a></li>
          </ul>
        </div>

      </div>

      <div className="portfolio-description">
        <h2>Description:</h2>
        <p>
         {description}
        </p>
      </div>

    </div>
  </section>  
      </>
  )
  }

    
    
}

export default PortfolioDetails
