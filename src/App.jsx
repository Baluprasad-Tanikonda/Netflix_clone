import React from 'react';
import Home from './Pages/Home/Home';
import { Routes, Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Header_page from './Pages/Header_page/Header_page';
// import Entrycards from './Pages/Entrycards/Entrycards';
// import Player from './Pages/Player/Player';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header_page />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home/>} />
        {/* <Route path="/Player/:id" element={<Player/>} /> */}
      </Routes>
    </div>
  );
};

export default App;