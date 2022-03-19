import React,{ useState,useEffect, useContext} from 'react'

import {Link} from 'react-router-dom';
import { Mode } from '../App';
const Nav = () => {
    const mode=useContext(Mode);
    const [search, setSearch] = useState("");
    const light="navbar navbar-dark bg-primary navbar-expand-lg";
      const dark="navbar navbar-dark bg-dark navbar-expand-lg";
      const [style, setStyle] = useState(light);
      useEffect(()=>{
        mode.mode=="Light"?setStyle(light):setStyle(dark);
      },[mode]);
  return (
    
     <nav style={ {position:"sticky",top:"0",zIndex:"1"}} className= {style} >
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">NewsApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/technology">Technology</Link>
                </li> 
            </ul>
            <button className={mode.mode=="Light"?"btn btn-dark" :"btn btn-light"  } id="modeBtn" onClick={()=>{mode.mode=="Light"?mode.setMode("Dark"): mode.setMode("Light")}}>{mode.mode=="Light"?"Dark Mode":"Light Mode"}</button>
            <form className="d-flex">
                <input 
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e)=>{setSearch(e.target.value)}}
                    />
                <Link

                  className={mode=="Light"?"btn btn-outline-dark" :"btn btn-outline-light"  }
                    type="submit"
                    to={`/search?${search}`}
                    >Search</Link>
            </form>
            </div>
        </div>
    </nav>
                  
  )
}

export default Nav;