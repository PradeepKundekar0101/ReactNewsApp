import './App.css';
import Nav from './Components/Nav';
import News from './Components/News';
import Search from './Components/Search';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { createContext, useState } from 'react';
const Mode=createContext();
const App=()=> {
  const [mode, setMode] = useState("Light");
  return (
    <Router>
      <Mode.Provider value={{mode,setMode}} >
      <Nav/>
        <Routes>
         
          <Route path='/' element={<News category="general" />}/>
          <Route path='/business' element={<News category="business"/>}/>
          <Route path='/entertainment' element={<News category="entertainment"/>}/>
          <Route path='/health' element={<News category="health"/>}/>
          <Route path='/science' element={<News category="science"/>}/>
          <Route path='/sports' element={<News category="sports"/>}/>
          <Route path='/technology' element={<News category="technology"/>}/> 
          <Route path='/search' element={<Search/>}/>
        </Routes>      
   

      </Mode.Provider>
    </Router>
  );
}

export default App;
export { Mode };
