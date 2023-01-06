import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from "./page/Main";
import Season from "./page/Season";
import Data from "./Season.json";
import Ham from './menu.svg'

function App() {
  let season = [];

  for (let i in Data) {
    season.push(i)
  }

  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Main />} /> */}
          <Route path="/:page" element={<Main />} />
          <Route path="/:page/msu" element={<Main />} />
        </Routes>

      </BrowserRouter>

    </div >
  );
}

export default App;
