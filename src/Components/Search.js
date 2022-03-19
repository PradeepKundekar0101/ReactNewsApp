import React,{useState,useEffect, useContext} from 'react'
import { useLocation} from 'react-router-dom';
import Newsitem from './Newsitem';
import Loading from './Loading';
import { Mode } from '../App';
const Search = () => {
    const location=useLocation();
    const light={
        backgroundColor:"#f3f3f3",
        color:"#000"
      }
      const dark={
        backgroundColor:"#021222",
        color:"#fff",
        
        
      }
      const [style, setStyle] = useState(light);
    const [news, setNews] = useState([]);
    const mode=useContext(Mode);
  
    useEffect(() => {
        fetchNews(); 
    },[location]);
    const fetchNews=async()=>{
       const q=location.search.replace("?","");   
       let url=`https://newsapi.org/v2/everything?q=${q}&apiKey=7d4830fd4fd54ab38b4db807621cb25b`;
       const response= await fetch(url);
       const newsJson = await response.json();
       setNews(newsJson.articles);
   }   
   useEffect(()=>{
    mode.mode=="Light"?setStyle(light):setStyle(dark);
  },[mode]);

 return (
    <div className='news' style={style}>
    {news.length==0 ? <Loading/>: news.map((ele,index)=>{
       if(ele.description!=null || ele.image!=null) return <Newsitem key={index} title={ele.name} image={ele.urlToImage} description={ele.description} link={ele.url} content={ele.content}></Newsitem>
    })}
  
</div>
 )
}

export default Search