import './App.css';
import Dday from './components/Dday';
import Header from './components/Header';
import DayList from './components/DayList';
import EmptyPage from './components/EmptyPage';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<DayList />}>
              
            </Route>
            <Route path='/day/:id' element={<Dday />}>
              
            </Route>

            <Route path="*" element={<EmptyPage/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
