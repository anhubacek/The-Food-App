import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes> 
    {/* <div className="App">
      <h1>Henry Food</h1>
    </div> */}
    <Route exact path='/'>
      <Landing/>
    </Route>
    <Route exact path='/home'>
      <Home/>
    </Route>
    
  
  </Routes>
  </BrowserRouter>
  );
}

export default App;
