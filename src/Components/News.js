import React,{useState,useEffect, useContext} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Newsitem from './Newsitem';
import Loading from './Loading';
import Error from './Error';
import { Mode } from '../App';
const News = ({category}) => {
    const mode=useContext(Mode);
    const [news, setNews] = useState([]);
    const [hasMore,setHasMore]=useState(true);
    const [page,setPage]=useState(2);
    const [error,setError]=useState(false);

    const light={
      backgroundColor:"#fff"
    }
    const dark={
      backgroundColor:"#0a253f"
    }
    const [style, setStyle] = useState(light);
    
    useEffect(() => {    
        setNews([]);
        setHasMore(true);
        setPage(2);
        fetchNews(); 
    },[category]);
    
    const fetchNews=async()=>{
      try {      
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=10&page=1&apiKey=7d4830fd4fd54ab38b4db807621cb25b`;
        console.log("Page= 1");
         const response= await fetch(url);
         const newsRes = await response.json();
         setNews(newsRes.articles);
         
         if(news.length>=newsRes.totalResults)
             setHasMore(false);
      } catch (e) {
        setError(true)
      }
    }
    const fetchMore=()=>{
      setPage((page)=>(page+1));
    
      setTimeout(async() => {

        try{
          let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=10&page=${page}&apiKey=7d4830fd4fd54ab38b4db807621cb25b`;
          const response= await fetch(url);
          const newsRes = await response.json();
          console.log(news.length +" "+newsRes.totalResults);
          
          setNews(news.concat(newsRes.articles));
          if(news.length>=newsRes.totalResults-10)
              setHasMore(false);
        }
        catch(e){
          
        }
      }, 500);
    }
   ;
    useEffect(()=>{
      mode.mode=="Light"?setStyle(light):setStyle(dark);     
    },[mode]);
  return (
     !error?
      <InfiniteScroll
      dataLength={news.length} //This is important field to render the next data
      next={fetchMore}
      hasMore={hasMore}
      loader={<h4 className='belowLoading' style={mode.mode=="Light"?{backgroundColor:"#fff",color:"#000"}:{backgroundColor:"#0a253f",color:"#fff"}}>Loading...</h4>}
    >
    <div className='news' style={style}>
        {news.length==0 ? <Loading/> : news.map((ele,index)=>{
           if(ele.description!=null || ele.image!=null) return <Newsitem key={index} title={ele.name} image={ele.urlToImage} description={ele.description} link={ele.url} content={ele.content} time={ele.publishedAt} author={ele.author} website={ele.source.name}></Newsitem>
        })}
      
    </div>
    </InfiniteScroll>
    :<Error/>
  )
}   

export default News