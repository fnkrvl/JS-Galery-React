import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import baloonLand from './components/BaloonLand';
import blueOcean from './components/BlueOcean.js';
import flowersLand from './components/FlowersLand';
import fogMountain from './components/FogMountain';
import mountainLake from './components/MountainLake';
import nightStars from './components/NightStars';
import Navigation from './components/Navigation';

 render (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <div className='containter'>
          <h1 className='text-center mt-3 mb-3 text-white'>Galería</h1>
        </div>
        <Route path='/BaloonLand' component={baloonLand}/>
        <Route path='/BlueOcean' component={blueOcean}/>
        <Route path='/FlowersLand' component={flowersLand}/>
        <Route path='/FogMountain' component={fogMountain}/>
        <Route path='/MountainLake' component={mountainLake}/>
        <Route path='/NightStars' component={nightStars}/>

        <Navigation/>
      </Routes>
    </BrowserRouter>
  )

export default App;
