import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Landing from './components/Landing.js';
import Home from './components/Home.js';
import RecipeForm from './components/RecipeForm.js';
import Detail from './components/Detail.js';



function App() {
  return (

    <BrowserRouter>
        <Routes> 
            <Route 
            exact path='/'
            element= {<Landing/>}
            />
            <Route 
            exact path='/home'
            element= {<Home/>} 
            />  
             <Route 
            exact path='/create'
            element= {<RecipeForm/>} 
            />  
             <Route 
            exact path='/detail'
            element= {<Detail/>} 
            />  
      </Routes>
  </BrowserRouter>


  );
}

export default App;
