import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FirberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FirberManualRecordIcon/>
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div> 
  )

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon/>
      </div>

      {newsArticle('Bitcoin is more alive than never', 'BTC - 8000 readers')}
      {newsArticle('Ethereum can be the next BTC', 'ETH - 700 readers')}
      {newsArticle('The debt of the countries is increasing', 'Global news - 1000 readers')}
    </div>
  )
}

export default Widgets;
