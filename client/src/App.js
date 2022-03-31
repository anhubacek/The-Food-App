import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Landing from './components/Landing.js';
import Home from './components/Home.js';


function App() {
  return (
   
    <BrowserRouter>
        <Routes> 
            {/* <div className="App">
              <h1>Henry Food</h1>
            </div> */}
            <Route 
            exact path='/'
            element= {<Landing/>}
            />
            <Route 
            exact path='/home'
            element= {<Home/>} 
            />   
      </Routes>
  </BrowserRouter>


  );
}

export default App;
