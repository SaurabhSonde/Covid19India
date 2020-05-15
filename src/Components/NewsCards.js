import React from 'react';

const NewsCards = ({news}) => {
	return(
	<div>
	

<div className="row" style={{align:"center"}}> 
<div className="col s10 m11" style={{paddingLeft:"5rem",textAlign:"center"}}> 
<div className="card small blue-grey"> 
<div className="card-image"> 
<img src={news.newsImage} alt="error"/> 
</div> 
<span className="card-content"> 
<p>{news.newsTitle}</p> 
</span> 
<div className="card-action" style={{textAlign:"center"}}> 

<a href={news.newsLink} className="btn btn-small waves-effect waves-light grey">Read More</a>

 </div> 
 </div> 
 </div>
  </div> 
	</div>
	)	
}



export default NewsCards;