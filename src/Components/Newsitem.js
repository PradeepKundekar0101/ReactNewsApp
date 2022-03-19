import React,{useState,useEffect, useContext} from 'react'
import { Mode } from '../App'
const Newsitem = ({title,image,description,link,time,author,website}) => {
  const mode=useContext(Mode);
  const light={
    backgroundColor:"#f3f3f3",
    width: "18rem",
    color:"#000"
  }
  const dark={
    backgroundColor:"#133150",
    color:"#fff",
    width: "18rem"
    
  }
  const [style, setStyle] = useState(light);
  useEffect(()=>{
    mode.mode=="Light"?setStyle(light):setStyle(dark);
  },[mode]);
  const date=new Date(time);
  const publishedAt=date.toDateString();

  return (
    <>
    <div className="card" style={style}>
        <img src={image!= null? image: "./imageicon.png"} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description.substring(0,100).concat("...")}</p>
       <a href={link} className="btn btn-primary" target="_blank">Read More</a>
        <p className='dateinfo' style={mode.mode=="Light"?{color:"#464646"}:{color:"#a3a3a3"}}>{publishedAt} by { author==null?"Unknown": author}</p>
        </div>

    </div>
    </>
  )
}

export default Newsitem