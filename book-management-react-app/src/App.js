import './App.css';

import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='/add' element={ <Add/> }></Route>
                <Route path='/edit' element={ <Edit/> }></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
