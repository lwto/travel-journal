import React from 'react'

export default function Article(props){
  console.log(props)
  return(
    <div className="article-container">
      
        <img src={`./images/${props.img}`} alt="" />
          <div className="content">
            <div>
              <i className="fa-solid fa-location-dot icon"></i>
              <p className="country">{props.location}</p>
              <a className="Link" href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className='location'>{props.title}</h1>
            <p className="date">{props.startDate} - {props.endDate}</p>
            <p className='description'>{props.description}</p>   
          </div>
    </div>
    
  )
}