import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './MainContant';
import PortfolioDetails from './DetailsPage/PortfolioDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
   
   <Router>
      <Header/>
  <main id="main">
  <Switch>
  <Route
      exact
      path="/"
      component={MainContent}
    />
  <Route
      
      path="/portfolio-details/:id"
      render={({ match }) => <PortfolioDetails match={match} />}
    />
  </Switch>   
  </main>   
<Footer/>
<a href="#t" className="back-to-top"><i className="icofont-simple-up"></i></a>
   </Router>
   
   
  );
}

export default App;
