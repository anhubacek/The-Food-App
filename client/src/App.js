
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Landing from './components/Landing.js';
import Home from './components/Home.js';
import RecipeForm from './components/RecipeForm.js';
import Detail from './components/Detail.js';
import ErrorPage from './components/ErrorPage';



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
              path='/detail/:id'
            element= {<Detail/>} 
            /> 
            <Route 
             path='*'
            element= {<ErrorPage/>} 
            />  
         
      </Routes>
  </BrowserRouter>


  );
}

export default App;
