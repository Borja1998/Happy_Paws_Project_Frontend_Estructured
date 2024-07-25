import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterLoginView from "./public_views/registerAndLogin/registerLoginView";
import ProtectoraHomeView from "./private_views/protectora_profile/protectora_profile";
import Pruebas from "./pruebasVistas/pruebaVista";


const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/signup" element={<RegisterLoginView />} />
      <Route path="/protectora/home" element={<ProtectoraHomeView />} />
      <Route path="/pruebas/footer" element = {<Pruebas/>}/>


    </Routes>
  </Router>
);

export default App;
